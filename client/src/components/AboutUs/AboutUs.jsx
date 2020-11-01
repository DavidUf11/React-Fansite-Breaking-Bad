import React from 'react';
import './AboutUs.css';
import christian from '../Images/christianb.jpg';
import david from '../Images/david.jpg';
import rita from '../Images/rita.jpg';
import oscar from '../Images/oscar.jpg';

const AboutUs = () => {
  return (
    <div class="Us">
      <h1>Meet The Team</h1>
      <ul class="the-team">
        <li>
          <a className="teammates" href="https://github.com/christianmbonet">
            <img src={christian} alt="Christian Bonet" />
            <p>Christian Bonet</p>
          </a>
        </li>
        <li>
          <a className="teammates" href="https://github.com/DavidUf11">
            <img src={david} alt="David Ufberg" />
            <p>David Ufberg</p>
          </a>
        </li>
        <li>
          <a className="teammates" href="https://github.com/oscarporfer">
            <img src={oscar} alt="Oscar Portes" />
            <p>Oscar Portes</p>
          </a>
        </li>
        <li>
          <a className="teammates" href="https://github.com/ritamwaikinda">
            <img src={rita} alt="Rita Mwaikinda" />
            <p>Rita Mwaikinda</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
