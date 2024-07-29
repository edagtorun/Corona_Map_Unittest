import { render, screen } from "@testing-library/react";
import Detail from "./index";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { storeData } from "../../constants";

//test ortamindaki sahte store'un kurulumunu yap projede thunk middleware'i kullandigimiz icin thunk'i da tanitiyoruz.
const mockStore = configureStore([thunk]);

test("yuklenme durumunda loader bilesenleri ekrana basilir", () => {
  //store'un yuklenme durumundaki halini simule et

  const store = mockStore({
    isLoading: true,
    error: null,
    data: null,
  });
  //bileseni gerekli kapsayicilari tanimlayarak renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );
  //loader'lar ekrana geliyor mu kontrol et
  screen.getAllByTestId("card-loader");
  screen.getByTestId("header-loader");
});

it("hata durumunda hata bileseni ekrana basilir", () => {
  //store'un hata durumundaki verilerini simule et
  const store = mockStore({
    isLoading: false,
    error: "Server responden with status code of 404 (undefined)",
    data: null,
  });

  //test edilecek bileseni renderla
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );

  //hatanin mesajini iceren bilesen ekrana basildi mi?

  screen.getByText(/Server responden with/i);
});

it("veri gelme durumunda kart bilesenleri ekrana basilir", () => {
  const store = mockStore(storeData);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    </Provider>
  );

  //1. ulke detaylari ekrana geliyor mu?

  //ekrandaki resmi al
  const img = screen.getByRole("img");

  //resmin kaynagi dogru mu kontrol et
  expect(img).toHaveProperty("src", storeData.data.country.flags.png);

  //ulke basligi ekrana geliyor mu?
  const title = screen.getByTestId("country-title");

  //ulke ismi dogru mu?
  expect(title).toHaveTextContent(storeData.data.country.altSpellings[1]);

  //2. Kartlar ekrana geliyor mu?

  //nesneyi diizye cevir
  const covidArr = Object.entries(storeData.data.covid);

  //dizideki her bir eleman icin key ve value degerleri ekrana basiliyor mu?
  covidArr.forEach((item) => {
    //basliklar dogru geldi mi?

    screen.getAllByText(item[0].split("_").join(" "));

    //degerler dogru geldi mi?
    screen.getAllByText(item[1]);
  });
});
