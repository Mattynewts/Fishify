// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { AuthProvider } from './components/authcontext.js';

import Login from './components/login.js';
import Register from './components/register.js';
import ForgotPassword from './components/forgot-password.js';
import Dashboard from './components/dashboard.js';
import Profile from './components/profile.js';
import ForceRender from './components/forceRender.js';
import Hamburger from './components/hamburger.js';

import './styling/app.css';

function App() {
  return (
    <div className='contain'>
      <MantineProvider>
          <AuthProvider>
            <Router>
                  <Routes>
                    <Route path="/" element={< Login />} />
                    <Route path="/login" element={< Login />} />
                    <Route path="/register" element={< Register />} />
                    <Route path="/forgot-password" element={< ForgotPassword />} />
                    <Route path="/dashboard" element={< Dashboard />} />
                    <Route path="/profile" element={< Profile />} />
                    <Route path="/render" element={< ForceRender />} />
                    <Route path="/menu" element={< Hamburger />} />
                  </Routes>
              </Router>
          </AuthProvider>
        </MantineProvider>
    </div>
  );
}

export default App;
