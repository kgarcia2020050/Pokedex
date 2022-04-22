import { Conexion } from "../Conexion";
import "../style/style.css";
export const CardsPokemon = ({ url }) => {
  const informacion = Conexion(url);

  const { pokeballs } = informacion;
  return (
    <div>
      {pokeballs == null ? (
        <h1>Cargando</h1>
      ) : (
          <div className="card card border-success mb-3">
            <div className="card-body">
              <img src={pokeballs.sprites.front_default} alt="Pokemon" />
            </div>
            <div className="card-footer">
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-capitalize">
                  <h3>{pokeballs.forms[0].name}</h3>
                </li>
                <li className="list-group-item text-capitalize">
                  Tipo: {pokeballs.types[0].type.name}
                </li>
                <li className="list-group-item">
                  Altura: {pokeballs.height / 10} m
                </li>
                <li className="list-group-item">
                  Peso: {pokeballs.weight / 10} kg
                </li>
              </ul>
            </div>
          </div>
      )}
    </div>
  );
};
