import React from 'react';
import { settingsData } from '../mock';

function Settings() {
  return (
    <div className="settings">
      <h1>{settingsData.title}</h1>
      <p>{settingsData.description}</p>
      <h2>Settings</h2>
      <ul>
        {settingsData.settings.map((setting, index) => (
          <li key={index}>
            <h3>{setting.title}</h3>
            <p>{setting.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Settings;