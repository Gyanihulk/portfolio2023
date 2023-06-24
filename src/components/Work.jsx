import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projects } from "../assets/projects";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <div className="links-container">
                  {i.id == "booking" ||
                    i.id == "fitness" ||
                    i.id == "foodDelivery" ? (
                      <Link className="button" to={"project/" + i.id}>Details</Link>
                    ) : null}
                    
                    {i.id == "booking" ||
                    i.id == "fitness" ||
                    i.id == "foodDelivery" ||i.id=='news'  ? (
                    
                     <Link className="button" to={i.url}>Demo</Link>
                    ) : null}
                    
                  
                  </div>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
