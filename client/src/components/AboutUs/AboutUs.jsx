import React from 'react';
import './AboutUs.css';
import christian from '../../Images/christianb.jpg';
import david from '../../Images/david.jpg';
import rita from '../../Images/rita.jpg';
import oscar from '../../Images/oscar.jpg';
import { useHistory } from 'react-router-dom';

const AboutUs = () => {
  const history = useHistory();
  return (
    <div className="about-us-page">
      <h1>Meet The Team</h1>

      <div className="team-members">
        <a id="card-link-tag" href="https://github.com/christianmbonet">
          <div id="character-card" className="card">
            <h5 className="card-title">Christian Bonet</h5>
            <img
              src={christian}
              className="card-img-top"
              alt="Christian Bonet"
            />
          </div>
        </a>
        <a id="card-link-tag" href="https://github.com/DavidUf11">
          <div id="character-card" className="card">
            <h5 className="card-title">David Ufberg</h5>
            <img src={david} className="card-img-top" alt="David Ufberg" />
          </div>
        </a>
        <a id="card-link-tag" href="https://github.com/oscarporfer">
          <div id="character-card" className="card">
            <h5 className="card-title">Oscar Portes</h5>
            <img src={oscar} className="card-img-top" alt="Oscar Portes" />
          </div>
        </a>
        <a id="card-link-tag" href="https://github.com/ritamwaikinda">
          <div id="character-card" className="card">
            <h5 className="card-title">Rita Mwaikinda</h5>
            <img src={rita} className="card-img-top" alt="Rita Mwaikinda" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
