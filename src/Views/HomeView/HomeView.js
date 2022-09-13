import React from "react";
import ArticleCard from "../../Components/ArticleCard/ArticleCard";
import "./HomeView.scss";

const HomeView = () => {
  return (
    <div className="homeview-container">
      <h2>Top Stories</h2>
      <ArticleCard />
    </div>
  );
};

export default HomeView;
