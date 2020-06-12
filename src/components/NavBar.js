import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  render () {
    return (
      <div>
        <NavLink exact activeStyle={styles.active} to='/'>
        Home
        </NavLink>
        <NavLink exact activeStyle={styles.active} to='/Javier'>
        Javier
        </NavLink>
        <NavLink exact activeStyle={styles.active} to='/Joey'>
        Joey
        </NavLink>
        <NavLink exact activeStyle={styles.active} to='/Shawn'>
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
}
