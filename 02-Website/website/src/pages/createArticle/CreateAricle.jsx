import { useState } from "react";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import styled from "../createArticle/createArticle.module.css";
import Input from "../../Components/input/input";
import TextArea from "../../Components/textarea/TextArea";
import { useEffect } from "react";
import axios from "axios";
const CreateArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    author: "",
    time: "",
    image: "",
    message: "",
  });

  const handleChange = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handlechangeContent = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };

  const handleClick = () => {
    axios.post("http://localhost:8000/articles", {
      image: article.image,
      title: article.title,
      time: article.time,
      date: article.date,
      author: article.author,
      message: article.message,
    });
  };

  return (
    <>
      <Navbar />
      <h1>Create Article</h1>
      <Input label="Title" name="title" onChange={handleChange} />
      <Input label="Date" name="date" onChange={handleChange} />
      <Input label="Author" name="author" onChange={handleChange} />
      <Input label="Reading Time" name="time" onChange={handleChange} />
      <Input label="img-url" name="image" onChange={handleChange} />
      <TextArea label="message" onChange={handlechangeContent} />
      <button onClick={handleClick}>Create Article</button>
      <Footer />
    </>
  );
};

export default CreateArticle;
