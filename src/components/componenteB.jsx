import React, { useState } from "react";
import PropTypes from "prop-types";


function ComponentB(estado) {
  const [conectado, setConectado] = useState(estado);
  return (
    <div>
      <h5>
        {conectado === false ? "Desconentado" : "Conectado"}
      </h5>
      <button onClick={() => setConectado(!conectado)}>
        {conectado === false ? "Conectar" : "Desconectar"}
      </button>
    </div>
  );
}


ComponentB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponentB;
