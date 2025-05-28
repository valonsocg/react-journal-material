import { fileUpload } from "../../helpers/fileUpload";

describe("pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://i.pinimg.com/736x/ac/53/c7/ac53c746c0b570df28f47c53f84657e6.jpg";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");
  });
});
