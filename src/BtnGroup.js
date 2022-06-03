import React from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function BtnGroup({ index, setIndex, slides }) {
  return (
    <div>
      {index > 0 ? (
        <FaArrowAltCircleLeft
          onClick={() => setIndex(index - 1)}
          size="40px"
          color="rgb(31, 132, 165)"
        />
      ) : null}
      {index < slides.length - 1 ? (
        <FaArrowAltCircleRight
          onClick={() => setIndex(index + 1)}
          size="40px"
          color="rgb(31, 132, 165)"
        />
      ) : null}
    </div>
  );
}

export default BtnGroup;
