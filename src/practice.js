const name="artyom"
let count= 0
console.log(name);
console.log(count);

let mron= "km"*0.621

console.log(mron);

const km1 =(km) => km * 0.621;
console.log(km1(408))

function parametr(name,craft) {
    '${name}, is currently abard the, ${craft}'
}
console.log(parametr);

const issPosition = {
  latitude: 78.3543,
  longitude: 9.6776
};

console.log(issPosition.latitude);
console.log(issPosition.longitude);




const asteroids = [
  { name: "2024 AB1", diameter: 120, hazardous: false },
  { name: "2024 CD2", diameter: 45, hazardous: true },
  { name: "2024 EF3", diameter: 890, hazardous: false },
  { name: "2024 GH4", diameter: 23, hazardous: true }
]


const names = asteroids.map(asteroid => asteroid.name)
console.log(names)

const hazardousOnly = asteroids.filter(
  asteroid => asteroid.hazardous
)
console.log(hazardousOnly)



const firstTwo = asteroids.slice(0, 2)
console.log(firstTwo)



const hazardousNames = asteroids
  .filter(asteroid => asteroid.hazardous)
  .map(asteroid => asteroid.name)

console.log(hazardousNames)
