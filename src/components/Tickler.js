import React from "react";

function Tickler() {
  function tickle(e) {
    console.log(e)
    e.target.disabled = true
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
