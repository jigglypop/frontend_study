import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const HeaderContainer = loadable(() => import('./containers/HeaderContainer'));
const Footer = loadable(() => import('./components/common/Footer'));
const PostListPage = loadable(() => import('./pages/PostListPage'));
const LoginPage = loadable(() => import('./pages/LoginPage'));
const RegisterPage = loadable(() => import('./pages/RegisterPage'));
const WritePage = loadable(() => import('./pages/WritePage'));
const PostPage = loadable(() => import('./pages/PostPage')); 
const UpdatePage = loadable(() => import('./pages/UpdatePage')); 

export interface AppProps{
  url : object
}

export default function App() {

  return (
    <div>
      <Route path="/" render={() => <HeaderContainer />} />
      <Switch>
        <Route exact path={['/@:username',"/"]} render={() => <PostListPage/>} />
        <Route path="/login" render={() => <LoginPage/>} />
        <Route path="/register" render={() => <RegisterPage/>} />
        <Route path="/write" render={() => <WritePage/>} />
        <Route path="/post/:postId" render={() => <PostPage/>} />
        <Route path="/update/:postId" render={() => <UpdatePage/>} />
      </Switch>
      <Footer />
    </div>
  );
}
