import Article from "../../Components/article/Article";
import Navbar from "../../Components/Navbar/navbar";
import styles from "../home/homeStyle.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../Components/Footer/footer";
function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        setArticles(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar title="My Blog" />
      <div className={styles.container}>
        <h2>New Blogs</h2>
        <div className={styles.articlesContainer}>
          {articles.map((article) => (
            <Article data={article} key={article.id} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Home;
