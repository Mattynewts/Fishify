// Login.js
import React from 'react';
import { Button, Container, Grid, GridCol, Image, TextInput } from '@mantine/core';
import '../styling/login.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Login = () => (
  <div>
    <Container size="xs">
      <Grid>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <GridCol span={12}>
          <div className="logo-container">
            <Image src={Logo} alt="Logo" height='180px'/>
          </div>
        </GridCol>
        <br></br>
        <br></br>

        <GridCol span={12}>
          <strong><h1 className="login-text">Login</h1></strong>
        </GridCol>

        <GridCol span={12}>
          <form>
            <TextInput
              placeholder="Login"
              autoComplete="username"
              required
            />
            <TextInput
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              required
            />
            <Button type="submit" fullWidth variant="filled" color="dark">
              Login →
            </Button>
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

export default Login;
