import React, { Fragment, useState } from "react";

const Formulario = () => {
  // State cita
  const [cita, actualizarCita] = useState({
    mascota: "",
    proprietario: "",
    date: "",
    time: ""
  });

  // Funcion que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = e => {
    // console.log(e.target.name);
    actualizarCita({ ...cita, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <h1>Crear cita</h1>
      <form>
        <label>Nombre de la mascota</label>
        <input
          type="text"
          name="mascota"
          className="classnamehere"
          placeholder="Nombre de la mascota"
          onChange={actualizarState}
        />
        <label>Nombre del pripietario</label>

        <input
          type="text"
          name="propietario"
          placeholder="Propietario"
          className="clasnamehere"
          onChange={actualizarState}
        />
        <label>Fecha</label>

        <input
          type="date"
          name="date"
          className="asd"
          onChange={actualizarState}
        />
        <label>hora</label>

        <input
          type="time"
          name="time"
          className="asd"
          onChange={actualizarState}
        />
      </form>
    </Fragment>
  );
};

export default Formulario;
