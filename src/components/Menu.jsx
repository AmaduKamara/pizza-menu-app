import React from "react";
import Pizza from "./Pizza";

import pizzaData from "../data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.map((data) => (
        <Pizza data={data} key={data.name} />
      ))}
    </main>
  );
};

export default Menu;
