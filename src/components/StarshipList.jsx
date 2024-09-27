import StarshipCard from "./StarshipCard";

function StarshipList({ starships }) {

    return (
        <div>
            <h2>Starships ({starships.length})</h2>
            <div>
                {starships.map((starship, index) => (
                    <StarshipCard
                        key={index}
                        name={starship.name}
                        model={starship.model}
                        starship_class={starship.starship_class}
                        manufacturer={starship.manufacturer}
                    />
                ))}
            </div>
        </div>
    )
}

export default StarshipList;