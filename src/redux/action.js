import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../constants";

export const getCountryData = createAsyncThunk(
  "covid/getCountryData",
  async ({ code, query }) => {
    const params = { iso: code, q: query };

    //gelen coda'a gore ulkenin covid bilgilerini al
    const req1 = axios.get(
      "https://covid-19-statistics.p.rapidapi.com/reports",
      { params, headers }
    );

    //isocode'a gore ulke detaylarini alan istegi hazirla
    const req2 = axios.get(
      code
        ? `https://restcountries.com/v3.1/alpha/${code}`
        : `https://restcountries.com/v3.1/name/${query}`
    );

    //iki API istegini ayni anda at
    const responses = await Promise.all([req1, req2]);

    //covid verilerinin icerisindeki region nesnesini dagit
    const covid = {
      ...responses[0].data.data[0],
      ...responses[0].data.data[0].region,
    };

    //gereksiz degerleri kaldir
    delete covid.region;
    delete covid.cities;

    //aksiyonun payload'i
    return { covid, country: responses[1].data[0] };
  }
);
