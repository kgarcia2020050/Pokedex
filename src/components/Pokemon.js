import { Conexion } from "../Conexion";
import { useState } from "react";
import { CardsPokemon } from "./CardsPokemon";
import "../style/style.css";
const Pokemon = () => {
  let offset = Math.round(Math.random() * 892);
  
  const [url] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=6&offset=" + offset
  );

  const informacion = Conexion(url);

  const { pokeballs } = informacion;

  return (
    <div>
      {pokeballs == null ? (
        <img
          className="pokeball"
          src="https://66.media.tumblr.com/9697ebbc4887dc57620c50a12f24c61d/tumblr_nc1rokF7r31s1rd1xo1_500.gif"
          alt="Cargando"
        />
      ) : (
        <div className="container">
          <ul className="cards">
            {pokeballs.results.map((p) => (
              <li className="card-item">
                <CardsPokemon url={p.url} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
