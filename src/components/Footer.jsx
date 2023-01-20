import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../assets/me.jpg"
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Adamya Kumar</h2>
        <p>There is only one thing constant in life CHANGES.</p>
        <p>So Train and Learn to Adapt.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/@adamyakumar" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/adamyakumar/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Gyanihulk" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
