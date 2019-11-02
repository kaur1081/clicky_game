import React from 'react';
import './Navbar.css';

export const Navbar = props => (
  <div className="navbar ">
    <div className="left-div">Clicky Game</div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div>
      Score: {props.score} <span className="score">|</span> High Score: {props.highScore}
    </div>
  </div>
);
