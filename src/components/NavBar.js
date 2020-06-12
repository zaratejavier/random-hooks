import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render () {
    return (
      <div style={styles.bar}>
        <NavLink exact activeStyle={styles.active} style={styles.bar}  to='/'>
        Home
        </NavLink>
        <NavLink exact activeStyle={styles.active} style={styles.bar} to='/Javier'>
        Javier
        </NavLink>
        <NavLink exact activeStyle={styles.active} style={styles.bar} to='/Joey'>
        Joey
        </NavLink>
        <NavLink exact activeStyle={styles.active} style={styles.bar} to='/Shawn'>
        Shawn
        </NavLink>   
      </div>
    )
  }
}

const styles = {
  active: {
    color: 'teal',
  },
  bar: {
    marginRight: "10px",
    fontWeight: "bold" ,
    fontFamily: "Metal Mania",
    fontSize: "30px",
    color: "black",
  }
 


}
