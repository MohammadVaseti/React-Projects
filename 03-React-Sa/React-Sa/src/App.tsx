import User from "./components/User";
import style from "./styles";

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
