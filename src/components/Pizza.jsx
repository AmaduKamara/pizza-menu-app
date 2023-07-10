import React from "react";

const Pizza = ({ pizza }) => {
  const { photoName, name, ingredients, price } = pizza;
  return (
    <li className="pizza">
      <img src={photoName} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{price}</p>
      </div>
    </li>
  );
};

export default Pizza;
