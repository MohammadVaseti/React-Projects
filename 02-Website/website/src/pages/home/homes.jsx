import Article from "../../Components/article/Article";
import Navbar from "../../Components/Navbar/navbar";
import styles from "../home/homeStyle.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../../Components/Footer/footer";
import { Link } from "react-router-dom";
function Home() {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        setArticles(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar title="My Blog" />
      {isLoading ? (
        <p>Wait a Moment Please</p>
      ) : (
        <div className={styles.container}>
          <h2>New Blogs</h2>
          <div className={styles.articlesContainer}>
            {articles.map((article) => (
              <Link to={`article/${article.id}`}>
                <Article data={article} key={article.id} />
              </Link>
            ))}
          </div>
        </div>
      )}
      <Footer></Footer>
    </>
  );
}
export default Home;
