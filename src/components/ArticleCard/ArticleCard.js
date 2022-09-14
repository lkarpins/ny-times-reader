import React from "react";
import "./ArticleCard.scss";

const ArticleCard = ({ title, byline, abstract }) => {
  return (
    <div className="article-card-container">
      <h3>{title}</h3>
      <h4>{byline}</h4>
      <p>{abstract}</p>
    </div>
  );
};

export default ArticleCard;
