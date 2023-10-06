import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import LandingPage from './components/LandingPage'; // Add this line

const Routes = () => {
  const location = useLocation();

  return (
    <Switch key={location.search}>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/articles" component={ArticleList} />
      <Route path="/articles/:article_id" component={Article} />
      <Route exact path="/users/:username" component={UserProfile} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;

