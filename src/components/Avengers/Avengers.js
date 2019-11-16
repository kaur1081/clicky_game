import React from 'react';
import './Avengers.css';

// the onClick function is defined as a callback so that the clicked elements value can be passed to props.clickEvent to check if the image has been clicked or not

const Avengers = props => (
  <div className="card" onClick={e => props.clickEvent(e.target.src)}>
    <img className="card-img-top card-height" src={props.name} alt="images" />
  </div>
);

export default Avengers;