import axios from "axios";
import { useState } from "react";

function RandomPokemon() {
  const [pokemons, setPokemons] = useState<any>(null);
  const search = () => {
    const id = Math.floor(Math.random() * 721 + 1);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(function (response) {
        // handle success
        setPokemons({
          id: response.data.id,
          height: response.data.height,
          name: response.data.name,
          weight: response.data.weight,
          url: `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
            "00" + id
          ).slice(-3)}.png`,
        });
        console.log(response);
      });
  };

  return (
    <div>
      {" "}
      <button className="link link--secondary" onClick={search}>
        Find
      </button>
      <p>who is this Pokemon? </p>
      {pokemons && (
        <div>
          <img src={pokemons.url} alt="" />
          <div>id: {pokemons.id}</div>
          <div>name: {pokemons.name}</div>
          <div>weight: {pokemons.weight}</div>
          <div>height: {pokemons.height}</div>
        </div>
      )}
    </div>
  );
}

export default RandomPokemon;
