import React, { useState, useEffect } from "react";
import ArticleContainer from "../../components/ArticleContainer/ArticleContainer";
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";
import { getArticleData } from "../../utilities/apiCalls";
import "./HomeView.scss";

const HomeView = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState("");
  // const [filterSelection, setFilterSelection] = useState([]);

  useEffect(() => {
    getArticleData("home").then((data) => setArticles(data.results));
  }, []);

  return (
    <div className="homeview-container">
      <DropDownMenu />
      <h2>Top Stories</h2>
      <ArticleContainer articles={articles} />
    </div>
  );
};

export default HomeView;
