import './App.css';
import ButtonGrid from './components/ButtonGrid';
import NumberDisplay from './components/NumberDisplay';
import { useState } from 'react';
import { calculate, getPromptValue } from './Handler';

function CheckDuplicateOperators(oldVal, newVal) {
  const ops = ['+', '-', 'x', '/']
  return ops.includes(oldVal) && ops.includes(newVal)
}

function App() {
  const [prompt, setPrompt] = useState("");
  const [isCalculated, setIsCalculated] = useState(false)

  const onSubmit = (data) => {
    // console.log(data)
    if(data==="C") {
      setPrompt("")
    } else if(data ==="=") {
      setPrompt(calculate(prompt))
      setIsCalculated(true) // kalkuleeritud
    } else if (isCalculated && ['+', '-', 'x', '/'].includes(data)) {
      setPrompt(prompt + getPromptValue(data)) 
      setIsCalculated(false)
    } else if (isCalculated) {
      setPrompt(getPromptValue(data)); // Replace with new input
      setIsCalculated(false);
    } else if (!prompt.length && ['+', '-', 'x', '/'].includes(data)) { 
      return;
    } else if (prompt.length > 0 && CheckDuplicateOperators(prompt.slice(-1), data)) { 
      return;
    } else {
      setPrompt(prompt + getPromptValue(data)) 
    }
  }

  return (
    <div className='calc'>
      <NumberDisplay prompt={prompt}></NumberDisplay>
      <ButtonGrid option1="(" option2=")" option3="π" option4={<img src="https://i.imgur.com/fjuUrY7.jpeg" width="120" height="120" value="xY"></img>} onSubmit={onSubmit}></ButtonGrid>
      <ButtonGrid option1="1" option2="2" option3="3" option4="C" onSubmit={onSubmit}></ButtonGrid>
      <ButtonGrid option1="4" option2="5" option3="6" option4="/" onSubmit={onSubmit}></ButtonGrid>
      <ButtonGrid option1="7" option2="8" option3="9" option4="x" onSubmit={onSubmit}></ButtonGrid>
      <ButtonGrid option1="0" option2="+" option3="-" option4="=" onSubmit={onSubmit}></ButtonGrid>
    </div>
  )
}

export default App;
