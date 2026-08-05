import { useState } from "react";
import "./App.css";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  const handleInput = (event) => {
    setNewCourse(event.target.value);
  };

  return (
    <>
      <div className="add-course">
        <input type="text" onChange={handleInput}></input>
        <button type="button">Add Course</button>
      </div>
      <h1>{newCourse}</h1>
      <div className="list"></div>
    </>
  );
}

export default App;
