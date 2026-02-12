import { useState } from "react";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/navbar";
import styled from "../createArticle/createArticle.module.css";
const CreateArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    date: "",
  });

  const handleChange = (e) => {
    switch (e.target.name) {
      case "title":
        setArticle({
          title: e.target.value,
        });

        break;

      case "date":
        setArticle({
          date: e.target.value,
        });

        break;
    }
    console.log(article);
  };

  return (
    <>
      <Navbar />
      <h1>Create Article</h1>
      <div>
        <label>title</label>
        <input name="title" onChange={handleChange} type="text"></input>
      </div>
      <div>
        <label>Date</label>
        <input name="date" onChange={handleChange} type="text"></input>
      </div>
      <Footer />
    </>
  );
};

export default CreateArticle;
