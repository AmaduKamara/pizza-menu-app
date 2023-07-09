import React from "react";

const Pizza = ({ data }) => {
  const { photoName, name, ingredients, price } = data;
  return (
    <div>
      <img src={photoName} alt="" />
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <p>{price}</p>
    </div>
  );
};

export default Pizza;
