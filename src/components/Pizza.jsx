import React from "react";

const Pizza = ({ pizza }) => {
  const { photoName, name, ingredients, price, soldOut } = pizza;

  // if (soldOut) {
  //   return (
  //     <li className="pizza sold-out">
  //       <img src={photoName} alt="" />
  //       <div>
  //         <h3>{name}</h3>
  //         <p>{ingredients}</p>
  //         <p>{price}</p>
  //       </div>
  //     </li>
  //   );
  // }

  return (
    // <li className={soldOut ? "pizza sold-out" : "pizza"}>
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{soldOut ? "SOLD OUT" : price}</p>
      </div>
    </li> 
  );
};

export default Pizza;
