import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const LoginPage = ({ onLogin , loginError}) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text" value={email} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
      {loginError && <p className="error">{loginError}</p>}
    </div>
  );
};

export default LoginPage;
