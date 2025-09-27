import React, { useState } from "react";
import "./../styles/App.css";
import Menu from "./menu";

const App = () => {
  // Initial menu data
  const dishes = [
    {
      id: 1,
      name: "Pancakes",
      category: "breakfast",
      price: "$5",
      img: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Omelette",
      category: "breakfast",
      price: "$4",
      img: "https://via.placeholder.com/100"
    },
    {
      id: 3,
      name: "Burger",
      category: "lunch",
      price: "$8",
      img: "https://via.placeholder.com/100"
    },
    {
      id: 4,
      name: "Pasta",
      category: "lunch",
      price: "$10",
      img: "https://via.placeholder.com/100"
    },
    {
      id: 5,
      name: "Chocolate Shake",
      category: "shakes",
      price: "$6",
      img: "https://via.placeholder.com/100"
    },
    {
      id: 6,
      name: "Strawberry Shake",
      category: "shakes",
      price: "$6",
      img: "https://via.placeholder.com/100"
    }
  ];

  // State for items to display
  const [menuItems, setMenuItems] = useState(dishes);

  // Filter function
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(dishes);
    } else {
      setMenuItems(dishes.filter((dish) => dish.category === category));
    }
  };

  return (
    <div id="main">
      <h1>Our Menu</h1>

      <div className="btn-container">
        <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => filterItems("lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => filterItems("shakes")}>
          Shakes
        </button>
      </div>

      <Menu items={menuItems} />
    </div>
  );
};

export default App;


