import API_Routes from "@/utils/Api/APIRoutes";

let baseURL = process.env.NEXT_PUBLIC_API_URL;

export const uploadImage = async (id, file, intent) => {
  let formData = new FormData();
  formData.append("file", file);

  console.log(`imageurl: ${baseURL}${API_Routes.image}`);

  try {
    const response = await fetch(`${baseURL}${API_Routes.image}`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        assetid: JSON.stringify(id),
        intent,
      },
    });
    const data = await response.json();
    if (data) {
      if (data.assetURL) {
        return data.assetURL;
      }
      if (data.status === 400) {
        return;
      }
    } else if (data.status === 401) {
      console.log("not authorized");
    } else {
      console.log("error on upload");
    }
  } catch (error) {
    console.log(error.json());
  }
};
