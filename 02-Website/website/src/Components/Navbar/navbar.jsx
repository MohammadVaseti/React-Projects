import styled from "./navbar.module.css";

function Navbar(props) {
  return (
    <div className={styled.headerContainer}>
      <h1>{props.title}</h1>
      <ul>
        <li>Blog Lists</li>
        <li>New Blog</li>
        <li>About Us</li>
      </ul>
    </div>
  );
}

export default Navbar;
