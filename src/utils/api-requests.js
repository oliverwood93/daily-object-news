import axios from "axios";
const baseURL = "https://oliverwood-news-api.herokuapp.com/api";

export const fetchArticles = ({ limit }) => {
  return axios
    .get(`${baseURL}/articles?${limit !== undefined ? `limit=` + limit : ""}`)
    .then(({ data: { articles } }) => articles);
}

export const fetchTopics =() =>{
  return axios
    .get(`${baseURL}/topics`)
    .then(({data: {topics}}) => topics)
}