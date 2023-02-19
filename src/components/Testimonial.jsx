import React from "react";
import aditi from "../assets/aditi.jpg";
import saumay from "../assets/saumay.jpg";
import mahak from "../assets/mahak.jpg";
import {FaLinkedin} from 'react-icons/fa'
const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Mahak Arora"}
          feedback={"He is very passionate and enthusiastic in teaching and also very helpful and friendly. One can easily converse with him and can ask doubts at any point of time even today when I am having any doubts I reach out to him."}
          linkedin={"https://www.linkedin.com/in/mahak-arora-703673220"}
          img={mahak}
        />
        <TestimonialCard
          name={"Aditi Arora"}
          feedback={
            "Experience , Perfection , Knowledge and clearance in concepts all speaks up in his way of teaching. He just makes sure that he takes out every bit of your capabilities and pour that out to carve your future in the most beautiful way. He works to make your basics strong and cheers you up with the loudest clap in the room for your success.!"
          }
          linkedin={"Chandigarh University ,21BCM1222@cuchd.in"}
             img={aditi}
        />
        <TestimonialCard
          name={"Saumay Srivastava"}
          feedback={"He always go above and beyond to support his student. I am grateful for their guidance and truly feel that I would not be where I am today without his mentorship. I highly recommend him as a mentor to anyone looking to grow and succeed in his field."}
          linkedin={"https://www.linkedin.com/in/saumaysrivastava/ "}
          img={saumay}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback ,linkedin, img}) => (
  <article>
    <img
      src={img}
      alt="User"
    />
    <h4>{name}</h4>
   <a href={linkedin}>
    <FaLinkedin/> 
    Linkedin</a>
    <p>{feedback}</p>
    
  </article>
);

export default Testimonial;
