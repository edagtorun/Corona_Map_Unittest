export const headers = {
  "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  "x-rapidapi-key": "3a018899a3msh42c01566c4542b3p13caa0jsnbc374e087ca6",
};

export const storeData = {
  isLoading: false,
  error: null,
  data: {
    covid: {
      date: "2023-03-09",
      confirmed: 17042722,
      deaths: 101492,
      recovered: 0,
      confirmed_diff: 0,
      deaths_diff: 0,
      recovered_diff: 0,
      last_update: "2023-01-30 23:20:55",
      active: 16941230,
      active_diff: 0,
      fatality_rate: 0.006,
      iso: "TUR",
      name: "Turkey",
      province: "",
      lat: "38.9637",
      long: "35.2433",
    },
    country: {
      name: {
        common: "Turkey",
        official: "Republic of Turkey",
        nativeName: {
          tur: {
            official: "Türkiye Cumhuriyeti",
            common: "Türkiye",
          },
        },
      },
      tld: [".tr"],
      cca2: "TR",
      ccn3: "792",
      cca3: "TUR",
      cioc: "TUR",
      independent: true,
      status: "officially-assigned",
      unMember: true,
      currencies: {
        TRY: {
          name: "Turkish lira",
          symbol: "₺",
        },
      },
      idd: {
        root: "+9",
        suffixes: ["0"],
      },
      capital: ["Ankara"],
      altSpellings: [
        "TR",
        "Turkiye",
        "Republic of Turkey",
        "Türkiye Cumhuriyeti",
      ],
      flags: {
        png: "https://flagcdn.com/w320/tr.png",
        svg: "https://flagcdn.com/tr.svg",
        alt: "The flag of Turkey has a red field bearing a large fly-side facing white crescent and a smaller five-pointed white star placed just outside the crescent opening. The white crescent and star are offset slightly towards the hoist side of center.",
      },
    },
  },
};
