// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import Home from './components/home.js';
import Login from './components/login.js';
import Register from './components/register.js';
import ForgotPassword from './components/forgot-password.js';

import './styling/app.css';

function App() {
  return (
    <div className='contain'>
      <MantineProvider>
            <Router>
              <Routes>
                <Route path="/" element={< Login />} />
                <Route path="/login" element={< Login />} />
                <Route path="/home" element={< Home />} />
                <Route path="/register" element={< Register />} />
                <Route path="/forgot-password" element={< ForgotPassword />} />
              </Routes>
          </Router>
        </MantineProvider>
    </div>
  );
}

export default App;
