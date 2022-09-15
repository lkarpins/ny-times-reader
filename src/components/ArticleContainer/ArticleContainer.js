import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Link } from "react-router-dom";
import "./ArticleContainer.scss";

const ArticleContainer = ({ articles }) => {
  const createArticleCards = () => {
    return articles.map((story, index) => {
      return (
        <div>
          <Link
            to={`/article/${story.section}/${index}`}
            key={index}
            className="link-style"
            state={story}
          >
            <ArticleCard
              title={story.title}
              byline={story.byline}
              abstract={story.abstract}
              key={index}
            />
          </Link>
        </div>
      );
    });
  };
  return <div className="card-container">{createArticleCards()}</div>;
};

export default ArticleContainer;
