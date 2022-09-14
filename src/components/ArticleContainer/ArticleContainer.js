import React from "react";
import ArticleCard from "../Article/ArticleCard";
import "./ArticleContainer.scss";

const ArticleContainer = ({ articles }) => {
  return (
    <div className="card-container">
      <ArticleCard articles={articles} />
    </div>
  );
};

export default ArticleContainer;
