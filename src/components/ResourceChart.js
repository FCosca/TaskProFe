import React from 'react';
import { resourceChartData } from '../mock';

function ResourceChart() {
  return (
    <div className="resource-chart">
      <h1>{resourceChartData.title}</h1>
      <p>{resourceChartData.description}</p>
      <h2>Resources</h2>
      <ul>
        {resourceChartData.resources.map((resource, index) => (
          <li key={index}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceChart;