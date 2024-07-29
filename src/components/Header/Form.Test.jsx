import { getByRole, render } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

test("Form gonderildiginde detay sayfasina yonlendirir", async () => {
  //userEvent kurulumu
  const user = userEvent.setup();
  //test edilebilir mock fonksiyonu olustur
  const mockFn = jest.fn();

  //test edilecek bileseni renderla
  render(<Form handleSubmit={mockFn} />);

  //inputu cagir
  const input = screen.getByPlaceholderText(/ulke ismine/i);

  //inputa ulke yaz
  await user.type(input, "Turkey");

  //butonu cagir
  const button = getByRole("button");

  //butona tikla
  await user.click(button);

  //fonksiyon cagirildi mi kontrol et
  expect(mockFn).toHaveBeenCalled();
});
