import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = undefined;
  return (
    // 2_4_1 div로 감싸줌
    // <div className="App">
    //   <h1>hello!</h1>
    //   <h1>react</h1>
    // </div>

    // 2_4_2 Fragment
    // <Fragment>
    //   <h1>hello!</h1>
    //   <h1>react</h1>
    // </Fragment>

    // <>
    //   <h1>{name} hello!</h1>
    //   <h1>react</h1>
    // </>

    // 2_4_3 if 연산자
    // <div>
    //   {name == '리액트'?(<h1>리액트입니다</h1>):(<h1>리액트가 아닙니다.</h1>)}
    // </div>

    // 2_4_4 and
    // <div>
    //   {name == '리액트'?<h1>리액트입니다</h1>:null}
    // </div>

    // <div>
    //   {name == '리액트' && <h1>리액트입니다</h1>}
    // </div>

    <div>{name || <h1>리액트 값 없음</h1>}</div>
  );
}

export default App;
