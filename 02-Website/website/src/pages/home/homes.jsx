import Article from "../../Components/article/Article";
import Navbar from "../../Components/Navbar/navbar";
import styles from "../home/homeStyle.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        console.log(res);
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
    </>
  );
}
export default Home;
