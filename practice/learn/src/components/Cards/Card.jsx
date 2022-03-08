import React from "react";

const Card = (props) => {
  const { title, price } = props;
  console.log(title, price);
  return (
    <div className="card_container">
      <img
        width="200px"
        height="200px"
        src="https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/m/c/f/-original-imagbe5qknarjywp.jpeg?q=70"
      />
      <p className="title">{title}</p>
      <p className="price">&#8377; {price}</p>
    </div>
  );
};

export default Card;
