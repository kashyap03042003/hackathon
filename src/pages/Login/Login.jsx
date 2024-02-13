import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: userType, username, password }), // Update 'userType' to 'role'
      });
      const data = await response.json();
      console.log(data); // handle response from the backend as needed
      if(userType==='ADMIN'){
        navigate('/admin');
      }
      else if(userType==='CLUBHEAD'){
         navigate('/club');
      }
      else if(userType==='PROFESSOR'){
         navigate('/prof')
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login Page</title>
      <body className='body-l'>
      <link rel="stylesheet" href="style.css" />
      <div className="container-l">
        <div className="image-container">
          <img
            src="https://assets.telegraphindia.com/telegraph/2023/Feb/1676870405_edugraph-3.jpg"
            alt="Logo"
          />
        </div>
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="user_type">Select User Type:</label>
              <select
                id="user_type"
                name="user_type"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="">-- Select --</option>
                <option value="CLUBHEAD">Club Head</option>
                <option value="PROFESSOR">Prof. In-Charge</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-group">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
      </body>
    </>
  );
}
