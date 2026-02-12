import styled from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className={styled.headerContainer}>
      <h4>{props.title}</h4>
      <ul>
        <li>
          <Link to="/">Blog Lists</Link>
        </li>
        <li>
          <Link to="/article/create-article">New Blog</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
