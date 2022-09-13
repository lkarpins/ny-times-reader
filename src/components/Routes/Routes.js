import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "../../Views/HomeView/HomeView";
import ArticleView from "../../Views/ArticleView/ArticleView";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/article/:id">
        <ArticleView />
      </Route>
      <Route exact path="/">
        <HomeView />
      </Route>
    </Switch>
  );
};

export default Routes;
