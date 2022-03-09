import axios from "axios";

const instanceAxios = axios.create({
  baseURL:
    "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=x4M1ABQlGTyiXS5jlbtbruSDNkyGGIAq",
  //   headers: {
  //     common: {
  //       Authorization: "AUTH TOKEN",
  //     },
  //   },
});

instanceAxios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

const API_KEY = "0nG5do2caU59G7F2PT1eRQD0RAsaX5Du";

console.log(instanceAxios.defaults.headers);

export const getCategories = async () => {
  try {
    const res = await axios.get(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=0nG5do2caU59G7F2PT1eRQD0RAsaX5Du"
    );

    console.log(res.data, "  res.data");

    return { success: true, data: res.data.results };
  } catch (error) {
    return { success: false };
  }
};

export const getDataByCategoryName = async (list_name_encoded) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/${list_name_encoded}.json?api-key=0nG5do2caU59G7F2PT1eRQD0RAsaX5Du`
    );

    // console.log(res.data.results, "    category");

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};
