import { useState } from "react";
import "./App.css";
import Course from "./Course";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  // functions

  const handleInput = (event) => {
    setNewCourse(event.target.value);
  };

  const course = {
    courseName: newCourse,
    id: courseList.length === 0 ? 1 : courseList[courseList.length - 1].id + 1,
  };
  const handlerButton = () => {
    setCourseList([...courseList, course]);
  };

  const deleteHandler = (courseId) => {
    const newCourseList = courseList.filter((course) => {
      if (courseId === course.id) return false;
      else return true;
    });
    setCourseList(newCourseList);
  };

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
            <Course key={i} course={course} deleteHandler={deleteHandler} />
          );
        })}
      </div>
    </>
  );
}

export default App;
