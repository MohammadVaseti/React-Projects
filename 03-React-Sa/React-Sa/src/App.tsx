import User from "./components/User";
import "./styles/style.css";
import styles from "./styles/style.module.css";
const App = () => {
  const age = 0;
  const names = ["saadoun", "maajoun"];
  const users = [
    { name: "gol", age: 20 },
    { name: "shab", age: 32 },
  ];

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
        <button type="button">Increse</button>
        <button type="button">Decrese</button>
        <button type="button">reset</button>
      </div>
    </>
  );
};

export default App;
