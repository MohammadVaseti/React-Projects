import styled from "../input/inputStyle.module.css";

const Input = () => {
  return (
    <>
      <div>
        <label>title : </label>
        <input name="title" onChange={handleChange} type="text"></input>
      </div>
    </>
  );
};

export default Input;
