const BASE_URL = `https://swapi.dev/api/starships/`


export async function getStarships() {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        return data.results;
    } catch(err) {
        console.log(err, ' <- err in show api call')
    }
}