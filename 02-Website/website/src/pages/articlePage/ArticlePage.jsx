import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import styled from "../articlePage/articlePage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const param = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${param.id}`)
      .then((res) => {
        setArticle(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar title="My Blog"></Navbar>
      <div className={styled.container}>
        <h1>{article.title}</h1>
        <img src={article.imgUrl} alt="" />
        <div style={{ marginBottom: "40px" }}>
          <span>Date : {article.date} /</span>
          <span>Written By : {article.author} /</span>
          <span>Reading Time : {article.time} min </span>
        </div>
        <p>{article.content}</p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ArticlePage;
