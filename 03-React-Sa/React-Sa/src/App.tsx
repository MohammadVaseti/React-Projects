import { useEffect, useState } from "react";
import User from "./components/User";
import "./styles/style.css";
import styles from "./styles/style.module.css";
const App = () => {
  const [toggle, setToggle] = useState(true);
  const [age, setAge] = useState(0);
  const [input, setInput] = useState("");
  const names = ["saadoun", "maajoun"];
  const users = [
    { name: "gol", age: 20 },
    { name: "shab", age: 32 },
  ];

  function incHandler() {
    setAge(age + 1);
  }

  const decHandler = () => {
    setAge(age - 1);
  };

  const resetHandler = () => {
    setAge(0);
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div>
        <User name="saadoun" age={17}></User>
        <h1 className="color">hello</h1>
        <h2 className={styles.back}>hi</h2>
        <h3 style={{ color: "yellow", backgroundColor: "green" }}>good</h3>
        {names.map((v, i) => {
          return <h1 key={i}>{v}</h1>;
        })}

        {users.map((value, i) => {
          return (
            <h1 key={i}>
              {value.name} {value.age}
            </h1>
          );
        })}
        <h1>{age}</h1>
        <button type="button" onClick={incHandler}>
          Increase
        </button>
        <button type="button" onClick={decHandler}>
          Decrease
        </button>
        <button type="button" onClick={resetHandler}>
          reset
        </button>
        <button type="button" onClick={toggleHandler}>
          Show/Hide
        </button>

        <input type="text" onChange={inputHandler} />
        {toggle == true && <h2>{input}</h2>}
      </div>
    </>
  );
};

export default App;
