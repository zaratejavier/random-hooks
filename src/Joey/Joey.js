import React, {useState} from 'react';
import Mode from './Mode';
import ModeForm from './ModeForm';

export default function Joey () {
const [modes, setModes] = useState 
([
  {id:1, name: "Ionian Mode", description: "The Ionian mode is a simple doh re mi major key. It is the modern major scale. It is composed of natural notes beginning on C."},
  {id:2, name: "Dorian Mode", description: "The Dorian mode is very similar to the modern natural minor scale. The only difference is in the sixth note, which is a major sixth above the first note, rather than a minor sixth."},
  {id:3, name: "Phrygian Mode", description: "The Phrygian is the third mode. It is also very similar to the modern natural minor scale. The only difference is in the second note, which is a minor second not a major. The Phrygian dominant is also known as the Spanish gypsy scale, because it resembles the scales found in flamenco music."},
  {id:4, name: "Lydian Mode", description: "The Lydian mode has just one note changed from the Ionian, a major scale, but with the fourth note from the bottom sharpened to give a slightly unsettling sound."},
  {id:5, name: "Mixolydian Mode", description: "The single tone that differentiates this scale from the major scale is its seventh note, which is a flattened seventh rather than a major seventh."},
  {id:6, name: "Aeolian Mode", description: "Aeolian is the natural minor scale"},
  {id:7, name: "Locrian Mode", description: "The Locrian mode has five notes in its scale flattened a half-step."},
]);

const renderModes = () => {return modes.map((mode) => <Mode key={mode.id} {...mode} /> )}

const addMode = (postMode) => {setModes([postMode, ...modes])}

    return (
      <div>
        <h1>Music Modes:</h1>
        <ModeForm add={addMode} />
        {renderModes()}
      </div>
    )
  }
  