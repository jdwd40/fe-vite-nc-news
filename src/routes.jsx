import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopicList from './components/TopicList';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import UserProfile from './components/UserProfile';
import Login from './components/Login';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ArticleList} />
      <Route exact path="/articles" component={ArticleList} />
      <Route exact path="/articles/:article_id" component={Article} />
      <Route exact path="/users/:username" component={UserProfile} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
