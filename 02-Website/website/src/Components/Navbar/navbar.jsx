import styled from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styled.headerContainer}>
      <ul>
        <li>Blog Lists</li>
        <li>New Blog</li>
        <li>About Us</li>
      </ul>
    </div>
  );
}

export default Navbar;
