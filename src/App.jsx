import { useState } from "react";
import PlantList from "./components/Plants/PlantList.jsx";
import Cart from "./components/Cart/Cart.jsx";
import PLANTS from "./data.js";

export default function App() {
  const [cart, setCart] = useState([]);

function addToCart(plant) {
    setCart((prevCart) => {
      const alreadyInCart = prevCart.some((item) => item.id === plant.id);

      if (alreadyInCart) {
        // Plant is already in the cart: bump its quantity by 1.
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // Plant is new to the cart: add it with a quantity of 1.
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  }

  function incrementQuantity(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decrementQuantity(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        // Any item that hits 0 (or somehow below) is dropped from the cart.
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Proper Plants</h1>
        <p className="tagline">Green things for people who forget to water them.</p>
      </header>

      <main className="app-main">
        <PlantList plants={PLANTS} onAddToCart={addToCart} />
        <Cart
          cart={cart}
          onIncrement={incrementQuantity}
          onDecrement={decrementQuantity}
          onRemove={removeFromCart}
        />
      </main>
    </div>
  );
}