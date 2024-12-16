import logo from './logo.svg';
import './App.css';
import ButtonGrid from './components/ButtonGrid';
import NumberDisplay from './components/NumberDisplay';
import { useState } from 'react';
import { calculate, getPromptValue } from './Handler';

function App() {
  const [prompt, setPrompt] = useState("");

  const onSubmit = (data) => {
    console.log(data)
    if(data==="C") {
      setPrompt("")
    } else if(data ==="=") {
      setPrompt(calculate(prompt))
    } else {
      setPrompt(prompt + getPromptValue(data))
    }
  }

  return (
    <div className='calc'>
      <NumberDisplay prompt={prompt}></NumberDisplay>
      <ButtonGrid option1="(" option2=")" option3="pi" option4={<img src="https://i.imgur.com/fjuUrY7.jpeg" width="120" height="120" value="xY"></img>} onSubmit={onSubmit}></ButtonGrid>
      <ButtonGrid option1="1" option2="2" option3="3" option4="C" onSubmit={onSubmit}></ButtonGrid>
      <ButtonGrid option1="4" option2="5" option3="6" option4="/" onSubmit={onSubmit}></ButtonGrid>
      <ButtonGrid option1="7" option2="8" option3="9" option4="x" onSubmit={onSubmit}></ButtonGrid>
      <ButtonGrid option1="0" option2="+" option3="-" option4="=" onSubmit={onSubmit}></ButtonGrid>
    </div>
  )
}

export default App;
