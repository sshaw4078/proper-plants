import PlantCard from "./PlantCard.jsx";

function PlantList({ plants, onAddToCart }) {
  return (
    <section className="plant-list">
      <h2 className="section-heading">The Greenhouse</h2>
      <div className="plant-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}

export default PlantList;