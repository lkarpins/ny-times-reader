import React, { useState, useEffect } from "react";
import ArticleContainer from "../../components/ArticleContainer/ArticleContainer";
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";
import { getArticleData } from "../../utilities/apiCalls";
import "./HomeView.scss";

const HomeView = () => {
  const [articles, setArticles] = useState([]);
  const [selection, setSelection] = useState("home");

  useEffect(() => {
    getArticleData(selection).then((data) => setArticles(data.results));
  }, [selection]);

  return (
    <main className="homeview-container">
      <div className="sub-heading">
        <DropDownMenu setSelection={setSelection} selection={selection} />
        <h2>Top Stories</h2>
      </div>
      <ArticleContainer articles={articles} />
    </main>
  );
};

export default HomeView;
