import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Link } from "react-router-dom";
import "./ArticleContainer.scss";

const ArticleContainer = ({ articles }) => {
  const createArticleCards = () => {
    return articles.map((story) => {
      return (
        <Link to="/article" className="link-style">
          <ArticleCard
            title={story.title}
            byline={story.byline}
            abstract={story.abstract}
            key={story.title}
          />
        </Link>
      );
    });
  };
  return <div className="card-container">{createArticleCards()}</div>;
};

export default ArticleContainer;
