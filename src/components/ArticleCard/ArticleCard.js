import React from "react";
import "./ArticleCard.scss";

const ArticleCard = ({ title, byline, multimedia }) => {
  return (
    <div className="article-card-container">
      <h3>{title}</h3>
      <h4>{byline}</h4>
    </div>
  );
};

export default ArticleCard;
