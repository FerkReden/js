import React, { useState } from "react";
import "./Controle.css";
import Items from "./Items";

function Controle() {
  const [stack, setStack] = useState([]);

  const addItem = () => {
    const newItem = "Item";
    setStack([...stack, newItem]);
  };

  const removeItem = () => {
    if (stack.length === 0) return;
    const newStack = stack.slice(0, -1);
    setStack(newStack);
  };
  return (
    <div className="controle">
      <h1>Controle</h1>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove</button>
      <Items />
      <div>
        {stack.map((item, index) => (
          <div className="item" key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Controle;
