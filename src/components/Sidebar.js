// Sidebar.js ( remains the same )
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/taskpro-logo.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div class="logo">
    <img src={logo} alt="Logo"></img>
    </div>
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/project">
            <i className="fas fa-project-diagram" />
            Projects
          </Link>
        </li>
        <li>
          <Link to="/finance">
            <i className="fas fa-chart-line" />
            Finance
          </Link>
        </li>
        <li>
          <Link to="/teams">
            <i className="fas fa-users" />
            Teams
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <i className="fas fa-cog" />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;