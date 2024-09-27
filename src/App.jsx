import { useState, useEffect } from 'react';
import { getStarships } from './Services/starshipService';

import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';

import './App.css';

const App = () => {

  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    async function fetchData() {
      const data = await getStarships();
      setStarships(data);
      setFilteredStarships(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleSearch = (query) => {
    const filtered = starships.filter((starship) =>
      starship.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(filtered);
  }

  return (
    <div>
      <h1>Starship Explorer</h1>
      <StarshipSearch onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <StarshipList starships={filteredStarships} />}
    </div>
  );
}

export default App
