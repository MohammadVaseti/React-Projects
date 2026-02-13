import { useState } from "react";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import styled from "../createArticle/createArticle.module.css";
import Input from "../../Components/input/input";
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
      <Input label="Title" name="title" onChange={handleChange} />
      <Input label="Date" name="date" onChange={handleChange} />
      <Input label="Author" name="author" onChange={handleChange} />
      <Input label="Reading Time" name="time" onChange={handleChange} />
      <Footer />
    </>
  );
};

export default CreateArticle;
