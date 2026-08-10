const Course = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <h1>{props.course.courseName}</h1>
      <button onClick={() => props.deleteHandler(props.course.id)}>
        Remove
      </button>
      <button
        onClick={() => {
          props.compeleteCourse(props.course.id);
        }}
      >
        Compeleted
      </button>
    </div>
  );
};

export default Course;
