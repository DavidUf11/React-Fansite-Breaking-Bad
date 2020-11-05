import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  const history = useHistory();
  let pathname = useLocation().pathname;

  if (pathname === '/about-us') {
    // let aboutUsLink = document.querySelector('#about-us-nav-link');
    // console.log(aboutUsLink);
    // aboutUsLink.classList.add('active-nav-link');
  }

  return (
    <div className="navbarDiv" id="myHeader">
      <img
        onClick={() => history.push('/')}
        src="https://upload.wikimedia.org/wikipedia/commons/0/03/Radiation_warning_symbol.png"
        alt="logo"
      />

      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a onClick={() => history.push('/')} className="nav-link">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                id="about-us-nav-link"
                onClick={() => history.push('/about-us')}
                className="nav-link"
              >
                Meet The Team
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => history.push('/game-start')}
                className="nav-link"
              >
                Test Your Knowledge
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
