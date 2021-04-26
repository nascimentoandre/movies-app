import axios from "axios";
import { KEY } from "../../../../strings";

export function requestGetTop() {
  return axios.request({
    method: "GET",
    baseURL: "https://api.themoviedb.org/3/movie/",
    url: "/top_rated",
    params: {
      language: "pt-BR",
      api_key: KEY,
      page: 1
    }
  });
}