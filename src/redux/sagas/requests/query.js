import axios from "axios";
import { KEY } from "../../../../strings";

export function requestGetQuery(str) {
  try {
    return axios.request({
      method: "GET",
      baseURL: "https://api.themoviedb.org/3/search/",
      url: "/movie?",
      params: {
        language: "pt-BR",
        api_key: KEY,
        page: 1,
        include_adult: "false",
        query: str
      }
    });
  } catch (err) {
    console.log(err);
  }
}