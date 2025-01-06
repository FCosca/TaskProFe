import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import TaskManager from './components/TaskManager';
import ResourceChart from './components/ResourceChart';
import Settings from './components/Settings';
import Sidebar from './components/Sidebar';
import TopNavBar from './components/TopNavBar'; // Importa il nuovo componente
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './ApiManager'; // Import the BASE_URL variable

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Aggiungi uno stato per la splash screen
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      verifyToken(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  const verifyToken = (token) => {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
    axios.get(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log('Response from /users/me:', response.data);
        setUser(response.data);
        setIsLoggedIn(true);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error verifying token:', error);
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setIsLoading(false);
        setLoginError('Invalid token. Please log in again.');
      });
  };

  const handleLogin = (email, password) => {
    axios.post(`${BASE_URL}/auth/login`, { email, password })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        verifyToken(token);
      })
      .catch(error => {
        console.error('Error logging in:', error);
        setLoginError('Invalid email or password. Please try again.');
      });
  };

  if (isLoading) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 d-flex flex-column">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <TopNavBar user={user} />
            <div className="main-content">
              <div className="loading-indicator">
                <span>Caricamento in corso...</span>
                <span className="spinner"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.reload();
  };

  // Render components only when authentication check is complete
  if (isLoggedIn) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1-5 d-flex flex-column">
            <Sidebar />
          </div>
          <div className="col-md-10-5">
            <TopNavBar user={user} onLogout={handleLogout}/>
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
        </div>
      </div>
    );
  } else {
    return <LoginPage onLogin={handleLogin} />;
  }
}

export default App;
