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
        <div>
          <span>date</span>
          <span>author</span>
          <span>time</span>
        </div>
        <img src="../../src/assets/images/iran.png" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A est ipsam
          maxime atque iusto fugit, consectetur cupiditate saepe quasi expedita,
          doloremque vel neque rem veniam enim laborum aperiam ad quo non
          voluptatum excepturi! Rem, reprehenderit quis odit a, recusandae
          tempore illo exercitationem quidem, quos quas nisi eos fugiat! Minus
          natus dignissimos asperiores consectetur! Quidem porro voluptatum
          molestias, officiis ea ut rem quia obcaecati earum temporibus
          inventore quis minima ullam, fuga tempore necessitatibus cumque animi
          nihil libero, expedita fugit doloremque ipsa dignissimos quasi. Modi
          facilis, at excepturi harum repellendus libero expedita itaque odio
          inventore labore, qui praesentium corrupti! Autem, maxime
          consequuntur.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ArticlePage;
