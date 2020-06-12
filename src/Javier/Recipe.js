import React from 'react';


export default function Recipe({id, name, ingridients}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{ingridients}</p>
    </div>
  )
}