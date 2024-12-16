import './NumberDisplay.css'

const NumberDisplay = (props) => {
    return (
        <input type="text" placeholder="0" className="display" value={props.prompt}/>
    )
}

export default NumberDisplay;