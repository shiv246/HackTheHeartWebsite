import React from 'react';
import './prizes.scss';

function PrizeHeading(props) {
  return (
    <div className="PrizeHeading">
      <h1>{props.type}</h1>
      <h3>{props.content}</h3>
    </div>
  );
}

function FirstPrize(props) {
  return (
    <div className="Prizes">
      {props.icon}
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export {FirstPrize, PrizeHeading};
