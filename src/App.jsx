
// getAsteroids();
// export default function App(){
//   return(
//     <div>
//       <h1>Artyom</h1>
//     </div>
//   )
// }
import './App.css'
import { useState, useEffect} from 'react'

const  mission = "Artyom"
const  crew =  7

/* return(
  <div>
    <h1>{mission}</h1>
    <p>crew:{crew}</p>
    <p>Days remaining:{10 -3}</p>
  </div>
) */


export default function App() {

  return (

    <div className="dashboard">
      <h1>My Dashboard</h1>
      <p>May 20, 2026</p>
      <ISSCard/>
      <Artyom/>   
      <PeopleInSpace/>
    </div>
    

  )
}

function ISSCard() {
  return (
    <div className="card">
      <h2>ISS Position</h2>
      <p>Latitude: 42.36</p>
      <p>Longitude: -71.05</p>
    </div>  
  )
}


function Artyom() {
  return (
    <div className="Artyom">
      <h2>Hello</h2>
      <p>Latitude: 42.36</p>
      <p>Longitude: -71.05</p>
    </div>
  )
}

function PeopleInSpace() {
  const [people, setPeople] = useState(null)
  useEffect(() => {
    fetch('http://api.open-notify.org/astros.json')
      .then(r => r.json())
      .then(data => setPeople(data.people))
  }, [])

return (
  <div className="card">
  <h2>People in Space</h2>
  {people ? (
    <ul>
    {people.map(person => (
      <li key={person.name}>
      {person.name} — {person.craft}
      </li>
    ))}
    </ul>
  ) : <p>Loading...</p>}
  </div>
  )
}

