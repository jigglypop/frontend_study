import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초',
      checked: true,
    },
    {
      id: 2,
      text: '리액트 중급',
      checked: true,
    },
    {
      id: 3,
      text: '리액트 심화',
      checked: true,
    },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};
export default App;
