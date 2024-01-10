import React from "react";
import PopChat from "Popchat.js";
import "./App.css"

const getMessage = (msg) => {
  console.log(msg)
}

function App() {
  return (
    <PopChat getMessage={getMessage} />
  );
}

export default App;