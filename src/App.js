import { useState } from "react";
import "./App.css";
import data from "./data";
import Slides from "./Slides";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function App() {
  const [slides, setSlides] = useState(data);
  const [index, setIndex] = useState(1);
  return (
    <div className="App">
      <Slides slides={slides} />
      <div>
        {index > 0 ? (
          <FaArrowAltCircleLeft
            onClick={() => setIndex(index - 1)}
            size="40px" color='rgb(31, 132, 165)'
          />
        ) : null}
        {index < slides.length - 1 ? (
          <FaArrowAltCircleRight
            onClick={() => setIndex(index + 1)}
            size="40px" color='rgb(31, 132, 165)'
          />
        ) : null}
      </div>
    </div>
  );
}
