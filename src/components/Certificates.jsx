import React, { useEffect } from "react";
import $ from "jquery";
import { certificates, certificates1, certificates2 } from "../assets/certificates";
const Certificates = () => {
  useEffect(() => {
    const sizeGridItems = () => {
      const elements = document.querySelectorAll(".content");
      let maxHeight = 0;
      elements.forEach((element) => {
        const height = element.offsetHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      const contentContainers = document.querySelectorAll(".content-ctr");
      contentContainers.forEach((container) => {
        container.style.height = `${maxHeight}px`;
      });
    };

    const expandButtonClickHandler = (event) => {
      const expandBtn = event.currentTarget;
      const card = expandBtn.closest(".card");
      const cardRow = expandBtn.closest(".card-row");

      if (expandBtn.classList.contains("expanded")) {
        expandBtn.classList.remove("expanded");
        card.classList.remove("expanded");
        cardRow.classList.remove("child-expanded");
      } else {
        expandBtn.classList.add("expanded");
        card.classList.add("expanded");
        cardRow.classList.add("child-expanded");
      }
    };

    const expandButtons = document.querySelectorAll(".expand-btn");

    expandButtons.forEach((btn) => {
      btn.addEventListener("click", expandButtonClickHandler);
    });

    window.addEventListener("resize", sizeGridItems);

    sizeGridItems();

    return () => {
      expandButtons.forEach((btn) => {
        btn.removeEventListener("click", expandButtonClickHandler);
      });
      window.removeEventListener("resize", sizeGridItems);
    };
  }, []);
  return (
    <><div id="certificates">

      <h2>Certificates</h2>
      <div class="cards">
        <div class="card-row">
          {certificates.map((i)=>(
            <div class="card hvr-sweep-to-right">
            <div class="top-bar">
              <button class="expand-btn">
              <img src={i.imgSrc} alt={i.title} />
              </button>
            </div>
            <div class="content-ctr">
              <div class="content collapse-content">{i?.title}</div>
              <div className="content expand-content" style={{ display: "none" }}>
                Expanded Content
              </div>
            </div>
          </div>
          ))}
        </div>
        <div class="card-row">
          {certificates1.map((i)=>(
            <div class="card hvr-sweep-to-right">
            <div class="top-bar">
              <button class="expand-btn">
              <img src={i.imgSrc} alt={i.title} />
              </button>
            </div>
            <div class="content-ctr">
              <div class="content collapse-content">{i?.title}</div>
              <div className="content expand-content" style={{ display: "none" }}>
                Expanded Content
              </div>
            </div>
          </div>
          ))}
        </div>
        <div class="card-row">
          {certificates2.map((i)=>(
            <div class="card hvr-sweep-to-right">
            <div class="top-bar">
              <button class="expand-btn">
              <img src={i.imgSrc} alt={i.title} />
              </button>
            </div>
            <div class="content-ctr">
              <div class="content collapse-content">{i?.title}</div>
              <div className="content expand-content" style={{ display: "none" }}>
                Expanded Content
              </div>
            </div>
          </div>
          ))}
        </div>
     
        {/* <div class="card-row">
          <div class="card hvr-sweep-to-right">
            <div class="top-bar">
              <button class="expand-btn">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
              </button>
            </div>
            <div class="content-ctr">
              <div class="content collapse-content">{i?.title}</div>
              <div class="content expand-content">Expanded Content</div>
            </div>
          </div>
          <div class="card hvr-shutter-out-horizontal">
            <div class="top-bar">
              <button class="expand-btn">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
              </button>
            </div>
            <div class="content-ctr">
              <div class="content collapse-content">Expand Out</div>
              <div class="content expand-content">Expanded Content</div>
            </div>
          </div>
          <div class="card hvr-sweep-to-left">
            <div class="top-bar">
              <button class="expand-btn">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
              </button>
            </div>
            <div class="content-ctr">
              <div class="content collapse-content">Expand To Left</div>
              <div class="content expand-content">Expanded Content</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    </>
  );
};

export default Certificates;
