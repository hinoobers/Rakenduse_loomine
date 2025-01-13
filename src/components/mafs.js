import "mafs/core.css";
import "./mafs.css"

import "mafs/core.css";
import "mafs/font.css";
import React, { useState } from "react";
import { Mafs, Coordinates, Plot, Theme } from "mafs"

function ZoomExample() {
  // to hold user input
  const [inputs, setInputs] = useState([{ value: '', color: '#f63cad' }]); // function and color holder
  const [holder, setHolder] = useState([]); // final array, loop over elements to display data

  // adds a new input field
  const addInputField = () => {
    setInputs([...inputs, { value: '', color: '#f63cad' }]);
  };
  
  // handle input change (for functions)
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs]; // make a copy
    newInputs[index].value = value; // add the value 
    setInputs(newInputs);
    // console.log(inputs)

    try {
      evaluateFunction();
    } catch(ex){

    }
  };
  
  // handle input change (for color)
  const handleColorChange = (index, value) => {
    const newInputs = [...inputs]; // make a copy
    newInputs[index].color = value; // add the value 
    setInputs(newInputs);
  };
  

  const evaluateFunction = () => {
    // create a new array
    // array that is displayed
    const evaluated = inputs.map(( {value, color} ) => {
      try {
        const fn = new Function('x', `return ${ value }`) // x as a argument, return the user input value
        return { fn, color }
      } catch {
        alert('invalid')
        return null
      }

    }).filter(Boolean)

    setHolder(evaluated);
  };

  return (
    <div className="mafs-inner">

      <div className="mafs-inputs" style={{paddingRight: '30px'}}>

        {inputs.map((input, index) => (
          <div key={index}>
          <input
            type="text"
            value={input.value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`Input ${index + 1}`}
          />
          <input 
          type="color"
          value={input.color}
          onChange={(e) => handleColorChange(index, e.target.value)}
          className="function-color"
          />

          </div>

        ))}
          
        <button
        onClick={addInputField}
        className="btn-mafs"
        >
          Lisa
        </button>
      </div>

        
      <div className="mafs-container">
        <Mafs
        zoom={{ min: 0.5, max: 3 }} // min = outwards, max = inwards
        viewBox={{
          x: [-3, 3],
          y: [-3, 3],
          padding: 0,
        }}
        >
        
        <Coordinates.Cartesian subdivisions={5} />

        { holder.map((f, index) => (
          <Plot.OfX key={index} y={f.fn} color={f.color} />
        )) }

        </Mafs>
      </div>

     

    </div>
  );
}

export default ZoomExample
