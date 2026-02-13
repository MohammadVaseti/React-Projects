import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import styled from "../articlePage/articlePage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Components/loading/Loading";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const param = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${param.id}`)
      .then((res) => {
        setArticle(res.data);
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar title="My Blog"></Navbar>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styled.container}>
          <h1>{article.title}</h1>
          <img src={article.image} alt="" />
          <div style={{ marginBottom: "40px" }}>
            <span>Date : {article.date} /</span>
            <span>Written By : {article.author} /</span>
            <span>Reading Time : {article.time} min </span>
          </div>
          <p>{article.content}</p>
        </div>
      )}
      <Footer></Footer>
    </>
  );
};

export default ArticlePage;
