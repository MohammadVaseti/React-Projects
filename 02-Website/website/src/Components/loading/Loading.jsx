import styled from "../loading/loadingStyle.module.css";

const Loading = () => {
  return (
    <>
      <div className={styled.container}>
        <div className={styled.ldsripple}>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
