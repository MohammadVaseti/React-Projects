import { useState } from "react";
import "./App.css";

const [courseList, setCourseList] = useState([]);
const [newCourse, setNewCourse] = useState("");

function App() {
  const handleInput = () => {};

  return (
    <>
      <div className="add-course">
        <input type="text" onChange={handleInput}></input>
        <button type="button">Add Course</button>
      </div>
      <div className="list"></div>
    </>
  );
}

export default App;
