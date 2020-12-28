import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import loadable from '@loadable/component';

const Header = loadable(() => import('./components/Header'));
const Footer = loadable(() => import('./components/Footer'));
const Home = loadable(() => import('./pages/Home'));
const News = loadable(() => import('./pages/News'));
const PostListPage = loadable(() => import('./pages/PostListPage'));
const LoginPage = loadable(() => import('./pages/LoginPage'));
const RegisterPage = loadable(() => import('./pages/RegisterPage'));
const WritePage = loadable(() => import('./pages/WritePage'));
const PostPage = loadable(() => import('./pages/PostPage')); 

export default function App() {
  return (
    <div>
      <Helmet>
        <title>App</title>
      </Helmet>
      <Route path="/" render={() => <Header />} />
      <Switch>
        <Route exact path={['/@:username',"/"]} render={() => <PostListPage/>} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/login" render={() => <LoginPage/>} />
        <Route path="/register" render={() => <RegisterPage/>} />
        <Route path="/write" render={() => <WritePage/>} />
        <Route path="/@:username/:postId" render={() => <PostPage/>} />
      </Switch>
      <Footer />
    </div>
  );
}
