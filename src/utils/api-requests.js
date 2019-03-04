import axios from "axios";
const baseURL = "https://oliverwood-news-api.herokuapp.com/api";

export default function fetchArticles({ limit }) {
  return axios
    .get(`${baseURL}/articles?${limit !== undefined ? `limit=` + limit : ""}`)
    .then(({ data: { articles } }) => articles);
}
