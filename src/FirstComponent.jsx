import React from 'react';

const FirstComponent = (props) => {
  const [inputText, setInputText] = React.useState("default");
  const [headerText, setHeaderText] = React.useState("");

  const handleOnChange = (event) => {
    setInputText(event.target.value);
  }

  const handleOnClick = () => {
    if (props.onButtonPress) {
      props.onButtonPress(inputText);
    } else { 
      setHeaderText(inputText);
    }
  }

  return (
    <div className="obvious-first-component-class">
      <input type="text" placeholder={props.placeholderText} value={inputText} onChange={handleOnChange}></input>
      <button onClick={handleOnClick}>click me</button>
      <h3>{headerText}</h3>
    </div>
  )
}

export { FirstComponent };