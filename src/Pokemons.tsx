import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=115")
      .then(function (response) {
        // handle success
        setPokemons(response.data.results);
        console.log(response);
      });

    console.log("hola mundillo");
  }, []);

  return (
    <div>
      {pokemons.map((pokemon: any) => {
        return (
          <div className="pokemons" key={pokemon.name}>
            <span className="pokeName">{pokemon.name}</span>{" "}
            <button className="link link--secondary">ver 🐱‍👓</button>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemons;
