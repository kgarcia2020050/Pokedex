import { useState, useEffect } from "react";

export const Conexion = (url) => {
  //
  const [resultado, setResultado] = useState({ pokeballs: null });

  useEffect(() => {
    obtenerDatos(url);
  }, [url]); //Arreglo del url que se recibe

  async function obtenerDatos(url) {
    //Es asincrona para esperar que se envie el resultado
    try {
      const res = await fetch(url);
      const data = await res.json();

      setResultado({ pokeballs:data });
    } catch (e) {
      console.log(e);
    }
  }

  return resultado;
};
