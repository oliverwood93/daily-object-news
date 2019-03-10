import React, { Fragment, Component } from "react";
import UserAvatar from "../UserAvatar";
import "./Account.css";
import { fetchArticles } from "../../utils/api-requests";
import { Link } from "@reach/router";

export default class Account extends Component {
  state = {
    articlesByUser: []
  };

  componentDidMount() {
    const { username } = this.props;
    fetchArticles({ author: username }).then(articles =>
      this.setState({ articlesByUser: articles })
    );
  }

  render() {
    console.log(this.state.articlesByUser);
    if (this.props.user) {
      const { articlesByUser } = this.state;
      const { username, name, avatar_url } = this.props.user;
      return (
        <Fragment>
          <div>
            <h2>Account</h2>
            <span className="account-name-img-header">
              <UserAvatar username={username} avatar_url={avatar_url} />
              <h3>
                {username} - {name}
              </h3>
              <hr />
            </span>
          </div>
          <div>
            <h3>Articles</h3>
            <p>Total Articles Posted: {articlesByUser.length}</p>
            <ul>
              {articlesByUser.map(article => (
                <Link to={`/articles/${article.article_id}`}>
                  {" "}
                  <li key={article.article_id}>{article.title}</li>
                </Link>
              ))}
            </ul>
            <hr />
          </div>
        </Fragment>
      );
    } else return null;
  }
}
