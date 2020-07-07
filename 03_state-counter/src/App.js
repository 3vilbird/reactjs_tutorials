import React, { useState } from "react";
import "./App.css";

const App = () => {
  // variable and the methoad to update the value
  const [count, setCount] = useState(0); // 0 is default val for multi use object ({nmae:"",eail:""})

  return (
    <div className="App">
      <header>
        <h2>A counte app using state/hooks</h2>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset counter</button>
      <button onClick={() => (count > 10 ? "" : setCount(count + 1))}>
        Increase counter
      </button>
      <button onClick={() => (count < 1 ? "" : setCount(count - 1))}>
        decrease counter
      </button>
    </div>
  );
};

export default App;
