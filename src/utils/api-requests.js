import axios from "axios";
import querystring from 'querystring'
const baseURL = "https://oliverwood-news-api.herokuapp.com/api";

export const fetchArticles = (querys) => {
  const querystr = querystring.stringify(querys)
  return axios
    .get(`${baseURL}/articles?${querystr}`)
    .then(({ data: { articles } }) => articles);
}

export const fetchTopics =() =>{
  return axios
    .get(`${baseURL}/topics`)
    .then(({data: {topics}}) => topics)
}