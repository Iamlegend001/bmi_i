import React, { useMemo, useState } from "react";
import './App.css';

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  const onWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const onHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateBMI = useMemo(() => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      

      <h1>Project 1: BMI Calculator</h1>
      <div className="input_section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          value={weight}
          onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="100"
          max="250"
          value={height}
          onChange={onHeightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is </p>
        <p className="output">{calculateBMI}</p>
      </div>
    </main>
  );
};

export default App;
