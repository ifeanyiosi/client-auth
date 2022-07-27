import axios from 'axios';
import React, { useEffect, useState } from 'react'

import '../App.css'

function Card() {
    const [heroes, setHeroes] = useState([]);
    const hero = () => {
      axios
        .get("https://akabab.github.io/superhero-api/api/id/1.json")
        .then((response) => {
          console.log(response);
          setHeroes(response.data);
        });
    };

    useEffect(() => {
      hero();
    }, []);

  return (
    <div className='card'>
      <span className="title">Heroes and Villians</span>
      {heroes.map((user) => (
        <div key={user.id}>
          <img className="img" src={user.images.sm} alt="" />
          <h2> {user.name} </h2>
          <p> {user.biography.alignment} </p>
        </div>
      ))}
    </div>
  );
}

export default Card