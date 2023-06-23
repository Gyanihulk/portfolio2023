import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../assets/projects";
const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState();
  useEffect(() => {
    const project = projects.find((project) => project.id === id);
    setProject(project);
  }, [id]);
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 d-flex flex-column align-items-center">
            <div id="carousel" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="item active">
                  <img alt="hello" src={project?.ss1} />
                </div>
                <div class="item">
                  <img alt="hello" src={project?.ss2} />
                </div>
                <div class="item">
                  <img alt="hello" src={project?.ss3} />
                </div>
                <div class="item">
                  <img alt="hello" src={project?.ss4} />
                </div>
                <div class="item">
                  <img alt="hello" src={project?.ss5} />
                </div>
                <div class="item">
                  <img alt="hello" src={project?.ss6} />
                </div>
                <div class="item">
                  <img alt="hello" src={project?.ss7} />
                </div>
                <div class="item">
                  <img alt="hello" src={project?.ss8} />
                </div>
              </div>
            </div>
            <div class="clearfix">
              <div
                id="thumbcarousel"
                class="carousel slide"
                data-interval="false"
              >
                <div class="carousel-inner">
                  <div class="item active">
                    <div
                      data-target="#carousel"
                      data-slide-to="0"
                      class="thumb"
                    >
                      <img alt="hello" src={project?.ss1} />
                    </div>
                    <div
                      data-target="#carousel"
                      data-slide-to="1"
                      class="thumb"
                    >
                      <img alt="hello" src={project?.ss2} />
                    </div>
                    <div
                      data-target="#carousel"
                      data-slide-to="2"
                      class="thumb"
                    >
                      <img alt="hello" src={project?.ss3} />
                    </div>
                    <div
                      data-target="#carousel"
                      data-slide-to="3"
                      class="thumb"
                    >
                      <img alt="hello" src={project?.ss4} />
                    </div>
                  </div>
                  <div class="item">
                    <div
                      data-target="#carousel"
                      data-slide-to="4"
                      class="thumb"
                    >
                      <img alt="hello" src={project?.ss5} />
                    </div>
                    <div
                      data-target="#carousel"
                      data-slide-to="5"
                      class="thumb"
                    >
                      <img alt="hello" src={project?.ss6} />
                    </div>
                    <div
                      data-target="#carousel"
                      data-slide-to="6"
                      class="thumb"
                    >
                      <img alt="hello" src={project?.ss7} />
                    </div>
                    <div
                      data-target="#carousel"
                      data-slide-to="7"
                      class="thumb"
                    >
                      <img alt="hello" src={project?.ss8} />
                    </div>
                  </div>
                </div>
                <a
                  class="left carousel-control"
                  href="#thumbcarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span class="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a
                  class="right carousel-control"
                  href="#thumbcarousel"
                  role="button"
                  data-slide="next"
                >
                  <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
              </div>
              <div class="row pt-4 d-flex mt-4" style={{ paddingTop: '20px' }} >
                <div class="col-md-12 text-center">
                  <button
                    type="button"
                    class="btn btn-primary waves-effect waves-light "  style={{ marginRight: '10px' }}
                  >
                    View Demo <span class="badge">7</span>
                  </button>
                  <button
                    type="button"
                    class="btn btn-success waves-effect waves-light " style={{ marginRight: '10px' }}
                  >
                    Github <span class="badge">3</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <h2>{project?.title}</h2>
            <p>{project?.desc1}</p>
            <h3>The platform offers the following features:</h3>
            <p>
              {project?.desc2.split("|").map((item, index) => (
                <React.Fragment key={index}>
                  <span>&bull; </span>
                  {item.trim()}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
