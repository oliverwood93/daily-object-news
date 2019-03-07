import axios from "axios";
import querystring from "querystring";
const baseURL = "https://oliverwood-news-api.herokuapp.com/api";

export const fetchArticles = querys => {
  const querystr = querystring.stringify(querys);
  return axios.get(`${baseURL}/articles?${querystr}`).then(({ data: { articles } }) => articles);
};

export const fetchArticleById = Id => {
  return axios.get(`${baseURL}/articles/${Id}`).then(({ data: { article } }) => article);
};

export const fetchArticleComments = Id => {
  return axios.get(`${baseURL}/articles/${Id}/comments`).then(({ data: { comments } }) => comments);
};

export const fetchTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data: { topics } }) => topics);
};

export const fetchUsers = () => {
  return axios.get(`${baseURL}/users`).then(({ data: { users } }) => users);
};

export const patchVotes = (id, vote, path) => {
  return axios
    .patch(`${baseURL}/${path}/${id}`, { inc_votes: vote })
};

export const postComment = (id, user, comment) => {
  return axios.post(`${baseURL}/articles/${id}/comments`, {username: user, body: comment}).then(({data: {comment}}) => [comment])
}

export const postUser = (newUserInfo) => {
  return axios.post(`${baseURL}/users`, newUserInfo).then(({ data: {user} }) => user)
}
