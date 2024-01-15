import React, {useEffect, useState} from 'react';
import './footer.scss';
import Insta from './icons8-instagram.svg';
import Dis from './icons8-discord.svg';
import Linked from './icons8-linkedin-2.svg';
import Mail from './icons8-mail.svg';
import DevPost from './icons8-dev-post.svg';
import PrivacyPolicy from './Privacy policy.pdf';
import TermsOfUse from './Terms of use.pdf';
import Twitter from './icons8-twitter.svg';
import {Btn} from '../Top-division-components/Top-division-components.jsx';
import cross from './cross.svg';
import {SOCIALS, TOP_SECTION, FOOTER} from '../../Module/General';

export default function Footer() {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = e => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
        </div>
        <div className="Register_a">
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
            <Btn type="Register" overlay="Fill the form" />
          </a>
        </div>
        <div className="footer_info">
          <p>Website inspired by limbohacks.tech </p>
        </div>
      </div>
    </div>
  );
}
