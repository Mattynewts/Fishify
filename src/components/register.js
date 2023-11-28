import React, { useState } from 'react';
import { Button, Container, Grid, GridCol, Image, TextInput } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import userData from '../user.json';
import Logo from '../assets/logo.png';
import '../styling/login.css';

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
    setError('');
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const existingUser = userData.find((u) => u.username === registerData.username);

    if (existingUser) {
      setError('Username already exists. Please choose another.');
    } else {
      if (registerData.password !== registerData.confirmPassword) {
        setError('Passwords do not match.');
      } else {
        const newUser = {
          email: registerData.email,
          username: registerData.username,
          password: registerData.password,
        };
        userData.push(newUser);
        navigate('/login');
      }
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
              <Image src={Logo} alt="Logo" height="180px" />
            </div>
          </GridCol>
          <br></br>
          <br></br>

          <GridCol span={12}>
            <strong>
              <h1 className="login-text">Register</h1>
            </strong>
          </GridCol>

          <GridCol span={12}>
            <form onSubmit={handleRegistration}>
              <TextInput
                placeholder="Email"
                autoComplete="email"
                required
                name="email"
                value={registerData.email}
                onChange={handleInputChange}
              />
              <TextInput
                placeholder="Username"
                autoComplete="username"
                required
                name="username"
                value={registerData.username}
                onChange={handleInputChange}
              />
              <TextInput
                placeholder="Password"
                type="password"
                autoComplete="new-password"
                required
                name="password"
                value={registerData.password}
                onChange={handleInputChange}
              />
              <TextInput
                placeholder="Confirm Password"
                type="password"
                autoComplete="new-password"
                required
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleInputChange}
              />
              <Button type="submit" fullWidth variant="filled" color="dark">
                Register →
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
                Do you have an account?<Link to="/login" className="text-bold"> Login</Link>
              </p>
            </div>
          </GridCol>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;