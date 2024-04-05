"use client";
import { useState } from "react";
import Header from "./common/Header";

export default function Menu() {
  const [menuItems, setMenuItem] = useState(initialMenuItems);

  return (
    <>
      <section>
        <Header title=" Choose the Items you want to order!" />
      </section>
      <section>
        {menuItems.map((mi) => {
          return <MenuItem />;
        })}
      </section>
    </>
  );
}

const MenuItem = () => {
  return <div>Hello from Menu item</div>;
};

const initialMenuItems = [
  {
    name: "Burger",
    price: 290,
    currency: "$",
    desc: "",
  },
  {
    name: "Pizza",
    price: 230,
    currency: "",
  },
];
