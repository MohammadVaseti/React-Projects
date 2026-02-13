import styled from "../input/inputStyle.module.css";

const Input = (props) => {
  return (
    <>
      <div>
        <label>{props.label} : </label>
        <input name={props.name} onChange={props.onChange} type="text"></input>
      </div>
    </>
  );
};

export default Input;
