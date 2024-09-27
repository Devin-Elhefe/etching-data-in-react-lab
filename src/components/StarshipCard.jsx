function StarshipCard({ name, model, starship_class, manufacturer }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Model: {model}</p>
            <p>Class: {starship_class}</p>
            <p>Manufacturer: {manufacturer}</p>
        </div>
    )
}

export default StarshipCard