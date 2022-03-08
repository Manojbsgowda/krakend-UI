import React, { useState } from "react";

const ToggleButton = () => {
  // const [changeName, setChangeName] = useState("manoj");
  const [toggle, setToggle] = useState(false);

  const handlebutton = () => {
    setToggle(!toggle);
  };
  console.log(toggle);
  return (
    <div className="container">
      <p>{toggle ? "manoj" : "nithin"}</p>
      {toggle ? (
        <img
          src="https://cdn4.vectorstock.com/i/1000x1000/26/28/light-bulb-on-white-background-vector-3872628.jpg"
          className="image1"
        />
      ) : (
        <img
          src="https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg"
          className="image1"
        />
      )}

      <button onClick={handlebutton}>light {toggle ? "off" : "on"}</button>
    </div>
  );
};

export default ToggleButton;
