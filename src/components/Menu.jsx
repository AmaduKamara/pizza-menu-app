import React from "react";
import Pizza from "./Pizza";

import pizzaData from "../data";

const Menu = () => {
  const pizzas = pizzaData
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizza={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Menu;
