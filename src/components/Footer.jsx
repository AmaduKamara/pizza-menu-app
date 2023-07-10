import React from "react";
import FooterOpen from "./FooterOpen";
import FooterClose from "./FooterClose";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  // else alert("Sorry, we're closed!");

  // if (!isOpen) {
  //   return (
  //     <footer className="footer">
  //       <p>
  //         We're happy toto to welcome you between {openHour}:00 and {closeHour}
  //         :00.
  //       </p>
  //     </footer>
  //   );
  // }

  // return (
  //   <footer className="footer">
  //     {
  //       <div className="order">
  //         <p>We're open until {closeHour}:00. Come visit us or order online.</p>
  //         <button className="btn">Order</button>
  //       </div>
  //     }
  //   </footer>
  // );

  return (
    <footer className="footer">
      {isOpen ? (
        <FooterOpen openHour={openHour} closeHour={closeHour} />
      ) : (
        <FooterClose openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
};

export default Footer;
