import User from "./components/User";
import "./styles/style.css";
const App = () => {
  return (
    <>
      <div>
        <User name="saadoun" age={17}></User>
        <h1 className="color">hello</h1>
      </div>
    </>
  );
};

export default App;
