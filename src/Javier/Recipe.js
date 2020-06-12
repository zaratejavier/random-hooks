import React from 'react';


export default function Recipe({id, name, ingridients,time}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Ingridients: {ingridients}</p>
      <p>Time: {time} minutes</p>
    </div>
  )
}