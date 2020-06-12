import React, {useState} from 'react';

export default function SubmitButton () {

const [hover, setHover] = useState (false)

return (
  <button 
  onMouseEnter={()=> setHover(true)}
  onMouseLeave={()=> setHover(false)}
  style={hover ?  {...styles.button, ...styles.hover } :
  styles.button}
   type="submit">
    Add</button>
)
}

const styles = {
button: {
fontSize: "20px",
background:"steelblue",
color:'white',
border: "none",
padding: '10px',
marginTop: "15px",
width: '100px',
borderRadius: '3px',

},
hover: {
cursor: "pointer",
background: "purple",
}
}
