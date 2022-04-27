import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pokemons from "./Pokemons";
import RandomPokemon from "./RandomPokemon";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="pokemons/:id" element={<div>Hola mundillo</div>} />
        <Route path="randomPokemon" element={<RandomPokemon />} />
        <Route path="invoices" element={<div>hola invoices</div>} />
      </Routes>
    </div>
  );
}

export default App;
