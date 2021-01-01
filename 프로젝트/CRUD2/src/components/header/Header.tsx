import React from 'react';
import { Link } from 'react-router-dom';
import { url_tag } from 'src/lib/server_url';

export interface HeaderProps{
  username : string | undefined,
  onLogout : () => void
}

const Header = ({username, onLogout} : HeaderProps) => (
  <header>
    <a href={`${url_tag}/list`}>PostList </a>
    <Link to="/login">Login </Link>
    <Link to="/register">Register </Link>
    <Link to="/write">Write </Link>
    <div>{username}</div>
    <button onClick={onLogout}>로그아웃</button>
  </header>
);

export default Header;
