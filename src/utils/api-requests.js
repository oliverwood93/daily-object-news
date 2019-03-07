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
  return axios.patch(`${baseURL}/${path}/${id}`, { inc_votes: vote });
};

export const postComment = (id, user, comment) => {
  return axios
    .post(`${baseURL}/articles/${id}/comments`, { username: user, body: comment })
    .then(({ data: { comment } }) => [comment]);
};

export const postUser = newUserData => {
  return axios.post(`${baseURL}/users`, newUserData).then(({ data: { user } }) => user);
};

export const postTopic = newTopicData => {
  return axios.post(`${baseURL}/topics`, newTopicData).then(
    ({
      data: {
        topic: { slug }
      }
    }) => slug
  );
};

export const postArticle = newArticleData => {
  return axios.post(`${baseURL}/articles`, newArticleData).then(
    ({
      data: {
        article: { article_id }
      }
    }) => article_id
  );
};

export const deleteArticleOrComment = (id, path) => {
  return axios.delete(`${baseURL}/${path}/${id}`).then(({ status }) => status);
};
