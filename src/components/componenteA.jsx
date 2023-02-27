import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import ComponentB from "./componenteB";


function componentA({ contact }) {
    return (
      <div>
        <h2>Nombres: {contact.nombre}</h2>
        <h3>Apellidos: {contact.apellido}</h3>
        <h3>Email: {contact.email}</h3>
        <h3>Status: <ComponentB estado={true} /> </h3>
      </div>
    );
  }
  
 /* A validation of the props that the component receives. */
  componentA.propTypes = {
    contact: PropTypes.instanceOf(Contact),
  };
  
  export default componentA;