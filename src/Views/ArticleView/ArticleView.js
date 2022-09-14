import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./ArticleView.scss";

const ArticleView = () => {
  const location = useLocation();
  const { abstract, title, byline, url, multimedia } = location.state;

  return (
    <div className="article-container">
      <img src={multimedia[1].url} />
      <div className="article-detail">
        <h2>{title}</h2>
        <p>{byline}</p>
        <p>{abstract}</p>
        <div className="button-link">
          <a href={url} alt="article link" target="blank">
            Article Link
          </a>
          <Link to={"/"}>
            <button className="return-home-button">Return Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
