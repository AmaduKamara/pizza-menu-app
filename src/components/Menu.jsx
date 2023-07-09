import React from "react";
import Pizza from "./Pizza";

import pizzaData from "../data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.name} />
        ))}
      </div>
    </main>
  );
};

export default Menu;
