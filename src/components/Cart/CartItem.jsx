function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="cart-item">
      <span className="cart-item-emoji" role="img" aria-label={item.name}>
        {item.image}
      </span>

      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-quantity">Qty: {item.quantity}</p>
      </div>

      <div className="cart-item-controls">
        <button
          className="qty-button"
          onClick={() => onDecrement(item.id)}
          aria-label={`Decrease ${item.name} quantity`}
        >
        </button>
        <button
          className="qty-button"
          onClick={() => onIncrement(item.id)}
          aria-label={`Increase ${item.name} quantity`}
        >
          +
        </button>
        <button className="remove-button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;