import React from "react";
import { Route, Switch } from "react-router-dom";
import ArticleView from "../../Views/ArticleView/ArticleView";
import HomeView from "../../Views/HomeView/HomeView";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeView />
      </Route>
      <Route exact path="/article">
        <ArticleView />
      </Route>
    </Switch>
  );
};

export default Routes;
