import { useState } from "react";
import "./App.css";
import data from "./data";
import Slides from "./Slides";
import BtnGroup from "./BtnGroup";

export default function App() {
  const [slides, setSlides] = useState(data);
  const [index, setIndex] = useState(1);
  return (
    <div className="App">
      <Slides slides={slides} index={index} />
      <BtnGroup index={index} setIndex={setIndex} slides={slides} />
    </div>
  );
}
