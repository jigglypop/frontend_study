import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header>
    <Link to="/">PostList </Link>
    <Link to="/login">Login </Link>
    <Link to="/register">Register </Link>
    <Link to="/write">Write </Link>
  </header>
);

export default Header;
