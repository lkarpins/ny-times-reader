import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleView from "../../Views/ArticleView/ArticleView";
import HomeView from "../../Views/HomeView/HomeView";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeView />} />
      <Route exact path="/article/:section/:id" element={<ArticleView />} />
    </Routes>
  );
};

export default AppRoutes;
