import styled from "../textarea/textArea.module.css";

const TextArea = (props) => {
  return (
    <>
      <div className={styled.container}>
        <label>{props.label} : </label>
        <textarea onChange={props.onChange}></textarea>
      </div>
    </>
  );
};

export default TextArea;
