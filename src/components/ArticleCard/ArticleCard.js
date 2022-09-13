import React from "react";
import "./ArticleCard.scss";

const ArticleCard = () => {
  return (
    <article className="card-container">
      <div className="article-strip">
        <h3>Title of Story</h3>
        <h4>Author</h4>
      </div>
    </article>
  );
};

export default ArticleCard;
