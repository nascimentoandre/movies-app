import axios from "axios";
import { KEY } from "../../../../strings";

export function requestGetMovie(id) {
  try {
    return axios.request({
      method: "GET",
      baseURL: "https://api.themoviedb.org/3/movie/",
      url: `/${id}`,
      params: {
        language: "pt-BR",
        api_key: KEY
      }
    });
  } catch (err) {
    console.log(err);
  }

}