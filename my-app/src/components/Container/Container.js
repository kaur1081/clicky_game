import React from 'react';
import './Container.css';
import Avengers from '../Avengers';

// main container for each Character component
// loops through each index in props.characters, which contains an array of character images
// to create a new Character component for each image
// attaches the passed down clickEvent function to each Character component
const Container = props => (
  // loops through
  <div
    className={
      props.shake
        ? 'container shake'
        : 'container'
    }
  >
    {props.Avengers.map((a, i) => <Avengers name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Container;