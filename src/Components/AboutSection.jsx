import React from 'react'
import Section from './Section'
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <Section>
        <h1 className="text-6xl font-extrabold leading-snug">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic">Gyani Hulk</span>
      </h1>
      
      <Typewriter
            options={{
              strings: ["A Software Engineer", "A Project Manager", "A Content Creator","An Athlete"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "text-lg text-white mt-12 ",
            }}
          />
      <motion.button className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}    initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 2,
      }}
      >
        Contact me
      </motion.button>
    </Section>
  )
}

export default AboutSection