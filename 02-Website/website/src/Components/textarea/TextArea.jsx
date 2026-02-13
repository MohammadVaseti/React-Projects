import styled from "../textarea/textArea.module.css";

const TextArea = () => {
  return (
    <>
      <div className={styled.container}>
        <label>Enter Your Content : </label>
        <textarea></textarea>
      </div>
    </>
  );
};

export default TextArea;
