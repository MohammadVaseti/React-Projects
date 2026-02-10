import About from "./pages/aboutUs/About";
import ArticlePage from "./pages/articlePage/ArticlePage";
import Home from "./pages/home/homes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
