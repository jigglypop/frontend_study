import React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps{
  username : string | undefined,
  onLogout : () => void
}

const Header = ({username, onLogout} : HeaderProps) => (
  <header>
    <Link to="/">PostList </Link>
    <Link to="/login">Login </Link>
    <Link to="/register">Register </Link>
    <Link to="/write">Write </Link>
    <div>{username}</div>
    <button onClick={onLogout}>로그아웃</button>
  </header>
);

export default Header;
