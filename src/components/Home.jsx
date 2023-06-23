import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Adamya Kumar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Project Manager", "A Content Creator","An Athlete"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="https://wa.me/7017368626?text=">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          

          
          <article data-special>
              <p>Contact</p>
              <span>+91 7017368626</span>
            </article>
        </div>
      </section>
      <section>
        <img src={me} alt="Adamya" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
