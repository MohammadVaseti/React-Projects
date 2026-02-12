import { useState } from "react";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import styled from "../createArticle/createArticle.module.css";
const CreateArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    author: "",
    time: "",
  });

  const handleChange = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    console.log(article);
  };

  return (
    <>
      <Navbar />
      <h1>Create Article</h1>
      <div>
        <label>title : </label>
        <input name="title" onChange={handleChange} type="text"></input>
      </div>
      <div>
        <label>Date : </label>
        <input name="date" onChange={handleChange} type="text"></input>
      </div>
      <div>
        <label>Author : </label>
        <input name="author" onChange={handleChange} type="text"></input>
      </div>
      <div>
        <label>Reading Time : </label>
        <input name="time" onChange={handleChange} type="text"></input>
      </div>
      <Footer />
    </>
  );
};

export default CreateArticle;
