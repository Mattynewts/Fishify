// Login.js
import React, { useState } from 'react';
import { Button, Container, Grid, GridCol, Image, TextInput } from '@mantine/core';
import { Link } from 'react-router-dom';
import userData from '../user.json'; 
import Logo from '../assets/logo.png';
import '../styling/login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = userData.find(
      (u) => u.username === loginData.username && u.password === loginData.password
    );

    if (user) {
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <Container size="xs">
        <Grid>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <GridCol span={12}>
            <div className="logo-container">
              <Image src={Logo} alt="Logo" height='180px' />
            </div>
          </GridCol>
          <br></br>
          <br></br>

          <GridCol span={12}>
            <strong><h1 className="login-text">Login</h1></strong>
          </GridCol>
          <GridCol span={12}>
            <form onSubmit={handleLogin}>
              <TextInput
                placeholder="Login"
                autoComplete="username"
                required
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
              />
              <TextInput
                placeholder="Password"
                type="password"
                autoComplete="current-password"
                required
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
              />
              <Button type="submit" fullWidth variant="filled" color="dark">
                Login →
              </Button>

              {error && (
              <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
                {error}
              </div>
            )}
            </form>
          </GridCol>

          <GridCol span={12}>
            <div className="bottom-text">
              <p className="bottom">
                Forgot Password? <Link to="/forgot-password" className="text-bold">Change it</Link>
              </p>
              <p className="bottom">
                Don't have an account?<Link to="/register" className="text-bold"> New Account</Link>
              </p>
            </div>
          </GridCol>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;