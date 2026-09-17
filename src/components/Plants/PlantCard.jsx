function PlantCard({ plant, onAddToCart }) {
  return (
    <article className="plant-card">
      <div className="plant-image-wrap">
        <span className="plant-emoji" role="img" aria-label={plant.name}>
          {plant.image}
        </span>
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
      </div>
      <button className="add-button" onClick={() => onAddToCart(plant)}>
        Add to cart
      </button>
    </article>
  );
}

export default PlantCard;