import { useState } from "react";
import "./App.css";

const [courseList, setCourseList] = useState();

function App() {
  return (
    <>
      <div className="add-course">
        <input type="text"></input>
        <button type="button">Add Course</button>
      </div>
      <div className="list"></div>
    </>
  );
}

export default App;
