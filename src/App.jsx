import "./App.css";
import imagen from "./assets/descarga.jpg"

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
{
id: 10,
first_name: "Denna",
last_name: "Pennoni",
gender: "Female",
age: 12,
generation: "baby boomer",
},
];

function Person({ personData }) {
const person = (
<>
<div className="card" style={{width: '18rem'}}>
<img src={imagen} className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">Card title</h5>
<p className="card-text">
Some quick example text to build on the card title and make up the
bulk of the card's content.
</p>
<a href="#" className="btn btn-primary">
Go somewhere
</a>
</div>
</div>
</>
);

return person;
}

function App() {
const personsData = data.map((personInfo) => (
<Person key={personInfo.id} personData={personInfo} />
));

return (
<>
<ul>{personsData}</ul>
</>
);
}

export default App;