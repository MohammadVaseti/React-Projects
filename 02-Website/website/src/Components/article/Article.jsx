import styled from "../article/articleStyle.module.css";
import pic from "../../assets/images/images.png";
function Article() {
  return (
    <>
      <div className={styled.article}>
        <img src={pic} alt="react" className={styled.picture}></img>
        <h3>React Lessons</h3>
        <span>5m</span>
      </div>
    </>
  );
}

export default Article;
