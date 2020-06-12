import React, {useState} from 'react';
import Trail from './Trail';
import TrailForm from './TrailForm';

export default function Shawn () {
const [trails, setTrails] = useState 
([
  {id:1, name:"Mt. Aire", vert:"2,000 ft", miles: 6, tech:"Med-Low", location:"Millcreek"},
  {id:2, name:"Pfiefferhorn", vert:"4,000 ft", miles: 9, tech:"High", location:"Little Cottonwood"},
  {id:3, name:"Timp", vert:"5,000 ft", miles: 15, tech:"Med-Low", location:"AF Canyon"},
  {id:4, name:"SLC Overlook", vert:"2,000 ft", miles: 5.4, tech:"Low", location:"Millcreek"},
  {id:5, name:"BoSho Marathon", vert:"6,000 ft", miles: 26.2, tech:"Low", location:"SLC Foothills"},
  {id:6, name:"King's Peak", vert:"5,000 ft", miles: 26, tech:"Med", location:"Uintas"},
]);

const renderTrails = () => {
  return trails.map((trail) => <Trail key={trail.id} {...trail} /> )
}

const addTrail = (postTrail) => {
 setTrails([postTrail, ...trails])
}
    return (
      <div>
        <h1>Trails!</h1>
        <TrailForm add={addTrail} />
        {renderTrails()}
      </div>
    )
  }
  
