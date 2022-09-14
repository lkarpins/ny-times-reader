import React from "react";
import "./ArticleCard.scss";

const ArticleCard = ({ title, byline, abstract }) => {
  return (
    <div className="article-card-container">
      <h2>{title}</h2>
      <h3>{byline}</h3>
      <p>{abstract}</p>
    </div>
  );
};

export default ArticleCard;
