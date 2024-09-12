import React from 'react';
import { dashboardData } from '../mock';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>{dashboardData.title}</h1>
      <p>{dashboardData.description}</p>
      <h2>Link</h2>
      <ul>
        {dashboardData.links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default Dashboard;