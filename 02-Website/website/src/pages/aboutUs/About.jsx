import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";
import iran from "../../assets/images/iran.png";
import styled from "../aboutUs/about.module.css";
const About = () => {
  return (
    <div>
      <Navbar title="My Blog" />
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        repudiandae fugit quasi accusamus nisi sunt recusandae eos error
        corrupti iusto tempore, vel itaque hic iste, aspernatur voluptate eius
        voluptates sed consequuntur officiis. Magni, suscipit. Hic ipsam sint
        itaque reiciendis architecto, necessitatibus esse, odio nesciunt id
        porro deleniti asperiores? Corrupti ullam ad iusto ipsum fugit esse rem
        vel magnam cum iure, velit atque, repellat obcaecati ipsam amet
        inventore error? At iste a cupiditate dignissimos repellat ipsam
        molestiae impedit consequuntur suscipit velit, id reprehenderit
        doloremque ut hic asperiores mollitia accusantium quia architecto
        quibusdam optio debitis quo explicabo? Eos nulla praesentium ducimus
        molestias.
      </p>
      <h3>Where We Work ?</h3>
      <div className={styled.container}>
        <img src={iran} alt="iran"></img>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
