import { useState } from 'react';
import Planetlist from './components/Planetlist';

// create a  list of planet data that contains the name, size, number of moons of the planet, a picture of the planet
// sotre the data in a const planet_data

const planet_data = [
  {
    name: 'Mercury',
    size: 0.382,
    moons: 0,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Venus',
    size: 0.949,
    moons: 0,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Earth',
    size: 1,
    moons: 1,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Mars',
    size: 0.532,
    moons: 2,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Jupiter',
    size: 11.209,
    moons: 79,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Saturn',
    size: 9.449,
    moons: 82,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Uranus',
    size: 4.007,
    moons: 27,
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Neptune',
    size: 3.883,
    moons: 14,
    image: 'https://via.placeholder.com/150'
  }
];



function App() {
  return (
    <main>
      <h1>Solar System</h1>
{/* render the planetlist */}
        <Planetlist planets={planet_data} />
    </main>
  );
}

export default App;
