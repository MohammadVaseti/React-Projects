import { useState } from "react";
import "./App.css";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  // functions

  const handleInput = (event) => {
    setNewCourse(event.target.value);
  };

  const handlerButton = () => {
    setCourseList([...courseList, newCourse]);
  };

  const deleteHandler = () => {};

  return (
    <>
      <div className="add-course">
        <input type="text" onChange={handleInput}></input>
        <button type="button" onClick={handlerButton}>
          Add Course
        </button>
      </div>
      <div className="list">
        {courseList.map((course, i) => {
          return (
            <div style={{ display: "flex" }}>
              <h1>{course}</h1>
              <button onClick={deleteHandler}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
