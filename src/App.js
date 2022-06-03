import { useState } from "react";
import "./App.css";
import data from "./data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function App() {
  const [slides, setSlides] = useState(data);
  const [index, setIndex] = useState(1);
  return (
    <div className="App">
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
      <div>
        {index > 0 ? (
          <FaArrowAltCircleLeft
            onClick={() => setIndex(index - 1)}
            size="30px"
          />
        ) : null}
        {index < slides.length - 1 ? (
          <FaArrowAltCircleRight
            onClick={() => setIndex(index + 1)}
            size="30px"
          />
        ) : null}
      </div>
    </div>
  );
}
