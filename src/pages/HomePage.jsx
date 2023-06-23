import React from "react";
import Work from "../components/Work";
import Timeline from "../components/Timeline";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Home from "../components/Home";
import Certificates from "../components/Certificates";

const HomePage = () => {
  return (
    <>
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Certificates/>
      <Testimonial />
    </>
  );
};

export default HomePage;
