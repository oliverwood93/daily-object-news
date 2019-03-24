import React, { Component } from "react";
import "./Account.css";
import { fetchArticles } from "../../utils/api-requests";
import UserArticles from "../UserArticles";
import Button from "react-bootstrap/Button";

export default class Account extends Component {
  state = {
    articlesByUser: [],
    articleCount: null,
    currentPage: 1
  };

  componentDidMount() {
    const { username } = this.props;
    const { currentPage } = this.state;
    fetchArticles({ author: username, limit: 5, p: currentPage }).then(
      ({ articles, total_count }) =>
        this.setState({ articlesByUser: articles, articleCount: total_count })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { username } = this.props;
    const { currentPage } = this.state;
    if (prevState.currentPage !== currentPage) {
      fetchArticles({ author: username, limit: 5, p: currentPage }).then(({ articles }) =>
        this.setState({ articlesByUser: articles })
      );
    }
  }

  render() {
    if (this.props.user) {
      const { articlesByUser, articleCount, currentPage } = this.state;
      const { username, name, avatar_url } = this.props.user;
      const { handleLogoutClick } = this.props;
      return (
        <div>
          <h2>Account</h2>
          <img
            className="user-avatar-account"
            src={avatar_url}
            alt={`${username}'s avatar`}
            onError={e => {
              e.target.onerror = null;
              e.target.src = "https://image.flaticon.com/icons/svg/149/149071.svg";
            }}
          />
          <h3 className="username-account-h1">
            {username} - {name}
          </h3>
          <Button className="logout-button" onClick={handleLogoutClick}>
            Log Out
          </Button>
          <hr />
          <UserArticles
            articleCount={articleCount}
            articles={articlesByUser}
            handlePageClick={this.handlePageClick}
            page={currentPage}
          />
        </div>
      );
    } else return null;
  }
  handlePageClick = event => {
    const pageDirection = event;
    const { currentPage } = this.state;
    this.setState({ currentPage: currentPage + pageDirection });
  };
}
