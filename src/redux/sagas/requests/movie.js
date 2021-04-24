import axios from "axios";
import { KEY } from "../../../../strings";

export function requestGetMovie() {
  return axios.request({
    method: "GET",
    baseURL: "https://api.themoviedb.org/3/movie/",
    url: "/76341",
    params: {
      language: "pt-BR",
      api_key: KEY
    }
  });
}