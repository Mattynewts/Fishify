// Register.js
import React from 'react';
import { Button, Container, Grid, GridCol, Image, TextInput } from '@mantine/core';
import { Link } from 'react-router-dom';

import '../styling/login.css';
import Logo from '../assets/logo.png';

const Register = () => (
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
          <form>
            <TextInput placeholder="Email" autoComplete="email" required />
            <TextInput placeholder="Username" autoComplete="username" required />
            <TextInput placeholder="Password" type="password" autoComplete="new-password" required />
            <TextInput
              placeholder="Confirm Password"
              type="password"
              autoComplete="new-password"
              required
            />
            <Button type="submit" fullWidth variant="filled" color="dark">
              Register →
            </Button>
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

export default Register;
