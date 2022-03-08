import React from "react";

const InputButtonChanges = () => {
  const [buttonValue, setButtonValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const handleInput = (e) => {
    setTextValue((e.target.name = e.target.value));
    console.log(textValue);
  };
  const handleButtonClick = () => {
    setButtonValue(textValue);
  };
  console.log(buttonValue);
  return (
    <div className="App">
      <input
        type="text"
        onChange={handleInput}
        name="text-input"
        value={textValue}
      />
      <button onClick={handleButtonClick}>click</button>
      <p>{textValue}</p>
      <p>{buttonValue}</p>
    </div>
  );
};

export default InputButtonChanges;
