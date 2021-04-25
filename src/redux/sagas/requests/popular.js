import axios from "axios";
import { KEY } from "../../../../strings";

export function requestGetPopular() {
  return axios.request({
    method: "GET",
    baseURL: "https://api.themoviedb.org/3/movie/",
    url: "/popular",
    params: {
      language: "pt-BR",
      api_key: KEY,
      page: 1
    }
  });
}