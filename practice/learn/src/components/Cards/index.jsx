import React from "react";
import Card from "./Card";
import "./card.css";

const array = [
  { title: "mobile1", price: 10000 },
  { title: "mobile2", price: 2000 },
  { title: "mobile3", price: 7000 },
  { title: "mobile5", price: 5000 },
];

const GroupCards = () => {
  return (
    <div className="main_container">
      {array.map((value, index) => {
        return <Card title={value.title} price={value.price} />;
      })}
    </div>
  );
};

export default GroupCards;
