import User from "./components/User";
import "./styles/style.css";
import styles from "./styles/style.module.css";
const App = () => {
  const names = ["saadoun", "maajoun"];

  return (
    <>
      <div>
        <User name="saadoun" age={17}></User>
        <h1 className="color">hello</h1>
        <h2 className={styles.back}>hi</h2>
        <h3 style={{ color: "yellow", backgroundColor: "green" }}>good</h3>
        {names.map((v, i) => {
          return <h1>{v}</h1>;
        })}
      </div>
    </>
  );
};

export default App;
