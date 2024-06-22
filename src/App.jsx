/* eslint-disable react/prop-types */
import React from 'react';
import "./App.css";
import Card from './Card'; // Se importa el componente Card

// array de datos
const data = [
  {
    id: 1,
    first_name: "Stevie",
    last_name: "Aslott",
    gender: "Male",
    age: 70,
    generation: "baby boomer",
  },
  {
    id: 2,
    first_name: "Wilone",
    last_name: "Bushel",
    gender: "Female",
    age: 72,
    generation: "gen z",
  },
  {
    id: 3,
    first_name: "Aurore",
    last_name: "Vaar",
    gender: "Female",
    age: 25,
    generation: "gen z",
  },
  {
    id: 4,
    first_name: "Jo-ann",
    last_name: "Marjoribanks",
    gender: "Female",
    age: 72,
    generation: "baby boomer",
  },
  {
    id: 5,
    first_name: "Floyd",
    last_name: "MacCaughey",
    gender: "Male",
    age: 68,
    generation: "generation x",
  },
  {
    id: 6,
    first_name: "Alika",
    last_name: "Deyenhardt",
    gender: "Female",
    age: 68,
    generation: "millennial",
  },
  {
    id: 7,
    first_name: "Drusy",
    last_name: "Easson",
    gender: "Female",
    age: 77,
    generation: "silent",
  },
  {
    id: 8,
    first_name: "Aileen",
    last_name: "Gaggen",
    gender: "Female",
    age: 35,
    generation: "silent",
  },
  {
    id: 9,
    first_name: "Mamie",
    last_name: "Campling",
    gender: "Female",
    age: 19,
    generation: "generation x",
  },
];

function App() {
  return (
    <div className="container">
      <div className="row">
        {/* Se itera sobre cada elemento del array data */}
        {data.map((personInfo) => (
          <div className="col-md-4 mb-3" key={personInfo.id}>
            {/* Se pasa personInfo como prop personData al componente Card */}
            <Card personData={personInfo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
