import React from "react";
import UseState from "./UseState.jsx";
import UseReducer from "./UseReducer.jsx";
import UseState2 from "./UseState2.jsx";
import UseEffect from "./UseEffect.jsx";
import UseMemo from "./UseMemo.jsx";
import UseCallback from "./UseCallback.jsx";

const App = () => {
  return (
    <div>
      <UseState />
      <UseState2 />
      <UseEffect />
      <UseReducer />
      <UseMemo />
      <UseCallback />
    </div>
  );
};

export default App;
