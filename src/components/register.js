// Register.js
import React from 'react';
import { Button, Container, Grid, GridCol, Image, TextInput } from '@mantine/core';
import '../styling/login.css'; // Create a new CSS file for registration styling
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
              Already have an account? <span className="text-bold">Login</span>
            </p>
            <p className="bottom">
              Forgot Password? <span className="text-bold">Change it</span>
            </p>
          </div>
        </GridCol>
      </Grid>
    </Container>
  </div>
);

export default Register;
