import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "alonsodev",
  api_key: "135352593279663",
  api_secret: "7hjaWCCqWifPrb94ZtgFcCH--Dg",
  secure: true,
});

describe("pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a cloudinary", async () => {
    const imageUrl =
      "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhaXNhamV8ZW58MHx8MHx8fDA%3D";
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    // console.log(url);
    const segments = url.split("/");
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    const cloudResp = await cloudinary.api.delete_resources([imageId], {
      resource_type: "image",
    });
    // console.log({ cloudResp });
  });

  test("debe de retornar null", async () => {
    const file = new File([], "foto.jpg");

    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
