import { useState } from 'react'

function StarshipSearch({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Search for starship..."
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="submit">Search</button>

        </form>
    )
}

export default StarshipSearch;