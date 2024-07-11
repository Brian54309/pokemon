import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { poke_url } from "./consant";
import Item from "./item";
const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(poke_url);
      const responseData = await response.json();
      setPokemon(responseData.results);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {pokemon.map((item) => {
        return <Item name={item.name} url={item.url} key={item.name} />;
      })}
    </div>
  );
};

export default App;
