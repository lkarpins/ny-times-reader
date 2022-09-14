import React, { useState, useEffect } from "react";
import ArticleContainer from "../../Components/ArticleContainer/ArticleContainer";
import { getArticleData } from "../../utilities/apiCalls";
import "./HomeView.scss";

const HomeView = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState("");
  const [filterSelection, setFilterSelection] = useState([]);

  useEffect(() => {
    getArticleData("arts").then((data) => setArticles(data.results));
  }, [filterSelection]);

  return (
    <div className="homeview-container">
      <h2>Top Stories</h2>
      <ArticleContainer articles={articles} />
    </div>
  );
};

export default HomeView;
