import React from "react";

function Slides({ slides, index }) {
  return (
    <main className="wrapper">
      {slides.map((slide, i) => {
        let position = "nextSlide";
        if (i === index) position = "activeSlide";
        if (i === index - 1) position = "lastSlide";
        return (
          <section key={slide.id} className={position}>
            <img src={slide.image} alt="nature" />
            <span className="page">{slide.id}</span>
          </section>
        );
      })}
    </main>
  );
}

export default Slides;
