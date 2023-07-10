import React from 'react'

const FooterClose = ({openHour, closeHour}) => {
  return (
    <p>
      We're happy to welcome you between {openHour}:00 and {closeHour}:00.
    </p>
  );
}

export default FooterClose