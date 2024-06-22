import React from "react";
import PropTypes from 'prop-types';
import imagen from "./assets/descarga.jpg";

// Componente Card para mostrar los datos de una persona
function Card({ personData }) {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={imagen} className="card-img-top" alt="Profile" />
        <div className="card-body">
          <h5 className="card-title">{`${personData.first_name.toUpperCase()} ${personData.last_name.toUpperCase()}`}</h5>
          <p className="card-text">
            Género: {personData.gender}<br />
            Generación: {personData.generation}<br />
            Edad: {personData.age}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }

// Definir los PropTypes para el componente Card
Card.propTypes = {
    personData: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      generation: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default Card;