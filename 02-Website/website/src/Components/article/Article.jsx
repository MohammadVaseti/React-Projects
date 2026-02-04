import styled from "../article/articleStyle.module.css";
import pic from "../../assets/images/images.png";
function Article(props) {
  console.log(props);
  return (
    <>
      <div className={styled.article}>
        <img
          src={props.data.imgUrl}
          alt="react"
          className={styled.picture}
        ></img>
        <h3>{props.data.title}</h3>
        <span>{props.data.time}m</span>
      </div>
    </>
  );
}

export default Article;
