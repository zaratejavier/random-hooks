import React from 'react';

//Post has props that are destructured
export default function Mode({name, description}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}