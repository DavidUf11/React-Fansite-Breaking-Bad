import React from 'react';
import { Nav } from 'react-bootstrap';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="navbarDiv" id="myHeader">
      <a href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/03/Radiation_warning_symbol.png"
          alt="logo"
        />
      </a>
      <nav class="navbar navbar-expand-lg">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Meet The Team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Test Your Knowledge
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <Nav className="navbar" defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link className="home" href="/">
            Home
          </Nav.Link>
          <button type="button" class="btn btn-primary">
            Primary
          </button>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link eventKey="link-1" className="About-Us" href="/About-Us">
            Meet the Team
          </Nav.Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Nav.Link eventKey="link-3" className="gamestart" href="/game-start">
            Test Your Knowledge
          </Nav.Link>
        </Nav.Item>

        <Nav.Item></Nav.Item>
      </Nav> */}
    </div>
  );
}

export default NavigationBar;
