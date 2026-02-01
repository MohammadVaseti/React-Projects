import Article from "../../Components/article/Article";
import Navbar from "../../Components/Navbar/navbar";
import styles from "../home/homeStyle.module.css";
function Home() {
  return (
    <>
      <Navbar title="My Blog" />
      <div className={styles.container}>
        <h2>New Blogs</h2>
        <Article />
      </div>
    </>
  );
}
export default Home;
