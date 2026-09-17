import CartItem from "./CartItem.jsx";

function Cart({ cart, onIncrement, onDecrement, onRemove }) {
  return (
    <section className="cart">
      <h2 className="section-heading">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Go adopt a plant.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Cart;