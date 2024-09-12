import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import TaskManager from './components/TaskManager';
import ResourceChart from './components/ResourceChart';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';

function AuthWrapper() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUser(user);
    localStorage.setItem('token', 'token');
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/task-manager" element={<TaskManager />} />
          <Route path="/resource-chart" element={<ResourceChart />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default AuthWrapper;