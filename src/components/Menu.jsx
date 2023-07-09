import React from "react";
import Pizza from "./Pizza";

import pizzaData from "../data";

const Menu = () => {
  return (
    <div>
      <h2>Our Menu</h2>
      {pizzaData.map((data) => (
        <Pizza data={data} key={data.name} />
      ))}
    </div>
  );
};

export default Menu;
