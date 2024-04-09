import "./styles.css";
import "./HEXElements";
import { HEXArray } from "./HEXElements";
import { useState } from "react";
export default function Random_Color() {
  const [colorLabel, setColorLabel] = useState("#FFFFFF");
  const [colorType, setColorType] = useState("HEX");

  function createRandomHEXColor() {
    let newHexColor = "#";
    for (let i = 0; i < 6; i++) {
      let newValue = Math.floor(Math.random() * 15);
      newHexColor += HEXArray[newValue];
    }

    console.log(newHexColor);
    setColorLabel(newHexColor);
    setColorType("HEX");
  }

  function createRandomRGBColor() {
    let newRGBColor = "rgb(";
    for (let i = 0; i < 3; i++) {
      let newValue = Math.floor(Math.random() * 255);
      newRGBColor += newValue;
      if (i !== 2) newRGBColor += ",";
    }
    newRGBColor += ")";
    console.log(newRGBColor);
    setColorLabel(newRGBColor);
    setColorType("RGB");
  }

  function generateRandomColor() {
    let randomColor = Math.floor(Math.random() * 2);
    if (randomColor == 1) createRandomHEXColor();
    else createRandomRGBColor();
  }

  return (
    <div className="random-box" style={{ backgroundColor: `${colorLabel}` }}>
      <div className="buttons-div">
        <button
          onClick={() => {
            createRandomHEXColor();
          }}
        >
          Create HEX Color
        </button>
        <button
          onClick={() => {
            createRandomRGBColor();
          }}
        >
          Create RGB Color
        </button>
        <button
          onClick={() => {
            generateRandomColor();
          }}
        >
          generate Random Color
        </button>
      </div>
      <div>
        <h2>{colorType} Color</h2>
      </div>
      <div>
        <h1>{colorLabel}</h1>
      </div>
    </div>
  );
}
