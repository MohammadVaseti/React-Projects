import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import styled from "../articlePage/articlePage.module.css";

const ArticlePage = () => {
  return (
    <>
      <Navbar title="My Blog"></Navbar>
      <div className={styled.container}>
        <h1>variables in js</h1>
        <div>
          <span>date</span>
          <span>author</span>
          <span>time</span>
        </div>
        <img src="../../src/assets/images/iran.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In illo magni
          tenetur numquam at error! Ipsa eaque expedita soluta praesentium?
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ArticlePage;
