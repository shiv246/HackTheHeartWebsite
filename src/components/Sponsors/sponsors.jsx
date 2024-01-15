import React from 'react';
import './sponsors.scss';
import {Btn} from '../Top-division-components/Top-division-components.jsx';
import {SOCIALS} from '../../Module/General';

function SponsorsHead() {
  return <h1 className="shead">Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <div className="Sponsor ">
      <img src={props.srcx} alt="Hack The Heart"></img>
    </div>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>
        Interested in Sponsoring? Feel free to email us at cube@g.skule.ca
      </h3>
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
