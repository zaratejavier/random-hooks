import React from 'react';

//Post has props that are destructured
export default function Trail({id, name, vert, miles, tech, location}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
    </div>
  )
}