import React from 'react';
import {SOCIALS, TOP_SECTION} from '../../Module/General';
import MytypedComponent from '../typing-effect/typing.js';
import './top-division-c.css';

function Btn(props) {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
}

function Myinfo() {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>

      <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
        {' '}
        <Btn class="register" type="Register " overlay="Hackers registration" />
      </a>
    </div>
  );
}

export {Btn, Myinfo};
