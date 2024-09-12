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
  const handleDebug = () => {
    console.log('Utente:', user);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsLoggedIn(true);
      axios.get(`${BASE_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}` // Add token to the header
        }
      })
        .then(response => {
          console.log('Response from /users/me:', response.data);
          setUser(response.data);
          setIsLoading(false); // Disattiva la splash screen quando la verifica è completata
        })
        .catch(error => {
          console.error('Error making request to /users/me:', error);
          setIsLoading(false); // Disattiva la splash screen anche in caso di errore
        });
    } else {
      setIsLoading(false); // Disattiva la splash screen se non è presente un token
    }
  }, []);

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


  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }
      const data = await response.json();
      console.log('API Response:', data);
      if (data) {
        const token = data.token;
        setIsLoggedIn(true);
        localStorage.setItem('token', token);
  
        // Attendere che la chiamata auth/login sia completata
        await axios.get(`${BASE_URL}/auth/validate-token`, {
          headers: {
            Authorization: `${token}`
          }
        })
        .then(response => {
          if (response.status === 200) {
            // Token is valid, fetch user data
            if (!user || !user.id) {
              axios.get(`${BASE_URL}/users/me`, {
                headers: {
                  Authorization: `Bearer ${token}` // Add token to the header
                }
              })
                .then(response => {
                  console.log('Response from /users/me:', response.data);
                  setUser(response.data);
                })
                .catch(error => {
                  console.error('Error making request to /users/me:', error);
                });
            }
          } else {
            // Token is invalid, clear local storage and redirect to login page
            localStorage.removeItem('token');
            setIsLoggedIn(false);
            setUser({});
            alert('Token non valido, si prega di effettuare nuovamente l\'accesso');
          }
        })
        .catch(error => {
          console.error('Error validating token:', error);
          // Token is invalid, clear local storage and redirect to login page
          localStorage.removeItem('token');
          setIsLoggedIn(false);
          setUser({});
          alert('Token non valido, si prega di effettuare nuovamente l\'accesso');
        });
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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
            <TopNavBar user={user} />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/task-manager" element={<TaskManager />} />
                <Route path="/resource-chart" element={<ResourceChart />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
              <button onClick={handleDebug}>Debug</button>
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
