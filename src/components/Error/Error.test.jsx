import { render } from "@testing-library/react";
import Error from ".";
import userEvent from "@testing-library/user-event";

/*beforeEach(() => {}); yeni test baslamadan once

  afterEach(() => {}); test bittikten sonra

  beforeAll(() => {}); butun testlerden once

  afterAll(() => {}); butun testlerden sonra */

describe("error bileseni testleri", () => {
  const user = userEvent.setup();
  const mockFn = jest.fn();
  let comp;

  //her testin oncesinde error bileseni render edilir.
  beforeEach(() => {
    comp = render(
      <Error message={"Failed with status code of 404"} retry={mockFn} />
    );
  });

  // Test-1
  it(" dogru hata mesajini gosterir", () => {
    comp.getByText(/failed with/i);
  });

  //Test-2
  it("tekrar dene butonu calisirir", async () => {
    const button = comp.getByRole("button");

    await user.click(button);

    expect(mockFn).toHaveBeenCalled();
  });
});
