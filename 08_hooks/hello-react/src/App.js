import React, { useState } from "react";
import Counter from "./Counter";
import Counter_reducer from "./Counter_reducer";
import Info from "./Info";
import Info_effect from "./Info_effect";
import Average from "./Average";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    // <div>
    //   <button
    //     onClick={() => {
    //       setVisible(!visible);
    //     }}
    //   >
    //     {!visible ? "보이기" : "숨기기"}
    //   </button>
    //   <hr />
    //   {visible && <Info_effect />}
    // </div>
    // <div>
    //   <Counter_reducer />
    // </div>
    <div>
      <Average />
    </div>
    // <Info />
  );
};

export default App;
