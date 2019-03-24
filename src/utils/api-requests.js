import axios from "axios";

const request = axios.create({ baseURL: "https://oliverwood-news-api.herokuapp.com/api" });

export const fetchArticles = querys => {
  return request.get("/articles", { params: querys }).then(({ data }) => data);
};

export const fetchArticleOrComments = (id, artOrComment) => {
  return request
    .get(`/articles/${id}/${artOrComment === "comments" ? "comments?limit=5" : ""}`)
    .then(({ data }) => data);
};

export const fetchTopicsOrUsers = topicsOrUsers => {
  return request.get(`/${topicsOrUsers}`).then(({ data }) => data);
};

export const patchVotes = (id, vote, path) => {
  return request.patch(`${path}/${id}`, { inc_votes: vote });
};

export const postComment = (id, username, body) => {
  return request
    .post(`/articles/${id}/comments`, { username, body })
    .then(({ data: { comment } }) => [comment]);
};

export const postUserTopicOrArticle = (UserArtOrTop, dataToPost) => {
  return request.post(`/${UserArtOrTop}`, dataToPost).then(({ data }) => data);
};

export const postTopic = newTopicData => {
  return request.post(`/topics`, newTopicData).then(
    ({
      data: {
        topic: { slug }
      }
    }) => slug
  );
};

export const postArticle = newArticleData => {
  return request.post(`/articles`, newArticleData).then(
    ({
      data: {
        article: { article_id }
      }
    }) => article_id
  );
};

export const deleteArticleOrComment = (id, path) => {
  return request.delete(`${path}/${id}`).then(({ status }) => status);
};

export const fetchUser = username => {
  return request.get(`/users/${username}`).then(({ data: { user } }) => user);
};
