import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="menu-container">
      {items.map((dish) => (
        <div
          key={dish.id}
          className="menu-item"
          data-test-id={`menu-item-${dish.category}`}
        >
          <img src={dish.img} alt={dish.name} />
          <h3>{dish.name}</h3>
          <p>{dish.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
