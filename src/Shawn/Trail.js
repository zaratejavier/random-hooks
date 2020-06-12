import React from 'react';

//Post has props that are destructured
export default function Trail({id, name, vert, miles, tech, location}) {
  return (
    <div style={styles.trail}>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <p>Length: {miles} miles</p>
      <p>Vertical Gain: {vert}</p>
      <p>Technical Difficulty: {tech}</p>
    </div>
  )
}
const styles = {
  trail: {
    border: "3px solid black",
    margin: "10px",
    background: "#f8deff",
    textAlign: "center",
  }
}