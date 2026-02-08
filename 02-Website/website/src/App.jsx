import Home from "./pages/home/homes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
