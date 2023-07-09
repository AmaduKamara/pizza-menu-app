import React from "react";

const Pizza = ({ pizza }) => {
  const { photoName, name, ingredients, price } = pizza;
  return (
    <div>
      <img src={photoName} alt="" />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>{price}</p>
    </div>
  );
};

export default Pizza;
