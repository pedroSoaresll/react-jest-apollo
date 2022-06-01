import './App.css';
import { usePokemons } from './hooks';

function App() {
  const { data, loading, error } = usePokemons({ limit: 2 })

  if (error) return <p>Error to load data</p>

  if (loading) return <p>Loading...</p>

  return (
    <div className="App">
      <ul>
        {data?.pokemons.results.map(pokemon => (
          <div key={pokemon.id}>
            <li>
              <img src={pokemon.image} alt={pokemon.name} />
            </li>
            <li>{pokemon.id}</li>
            <li>{pokemon.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
