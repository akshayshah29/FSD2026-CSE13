import React, { useState } from "react";

function ImageManipulation() {
  const [height, setHeight] = useState(300);
  const [width, setWidth] = useState(300);
  const [color, setColor] = useState("rgb(0, 0, 0)");

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    setColor(`rgb(${red}, ${green}, ${blue})`);
  };

  return (
    <div>
      <h1>Image Manipulation</h1>

      <div
        style={{
          backgroundColor: color,
          width: "300px",
          height: "300px",
          border: "1px solid black",
        }}
      >
        <img
          src="https://www.cats.org.uk/media/13136/220325case013.jpg?width=500&height=333.49609375"
          width={width}
          height={height}
        />
      </div>

      <h3>Height: {height}</h3>

      <button onClick={() => setHeight(height + 10)}>
        Increase Height
      </button>

      <button onClick={() => setHeight(height - 10)}>
        Decrease Height
      </button>

      <h3>Width: {width}</h3>

      <button onClick={() => setWidth(width + 10)}>
        Increase Width
      </button>

      <button onClick={() => setWidth(width - 10)}>
        Decrease Width
      </button>

      <h3>Color: {color}</h3>

      <button onClick={randomColor}>
        Generate Random Color
      </button>
    </div>
  );
}

export default ImageManipulation;
