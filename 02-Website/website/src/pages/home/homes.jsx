import Article from "../../Components/article/Article";
import Navbar from "../../Components/Navbar/navbar";
import styles from "../home/homeStyle.module.css";
function Home() {
  let articles = [
    {
      id: 1,
      imgUrl: "",
      title: "first",
      time: 5,
    },
  ];

  return (
    <>
      <Navbar title="My Blog" />
      <div className={styles.container}>
        <h2>New Blogs</h2>
        <div className={styles.articlesContainer}>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </>
  );
}
export default Home;
