import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [msg, setMsg] = useState("");

  const handleInc = () => {
    setCounter(counter + 1);
    return;
  };

  const handleDec = () => {
    if (counter <= 0) {
      setMsg("Counter should not be in -ve");
      return;
    } else {
      setCounter(counter - 1);
      return;
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox Counter</h1>
      <button onClick={handleInc}>+</button>

      <h5>{counter}</h5>
      <p>
        <i>{counter <= 0 ? msg : ""}</i>
      </p>
      <button onClick={handleDec}>-</button>
    </div>
  );
}
