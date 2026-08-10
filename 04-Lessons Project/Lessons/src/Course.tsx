const Course = () => {
  return (
    <div key={`div_${i}`} style={{ display: "flex" }}>
      <h1 key={`h1_${i}`}>{course.courseName}</h1>
      <button key={`btn_${i}`} onClick={() => deleteHandler(course.id)}>
        Remove
      </button>
    </div>
  );
};

export default Course;
