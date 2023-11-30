// ForgotPassword.js
import React from 'react';
import { Button, Container, Grid, GridCol, Image, TextInput } from '@mantine/core';
import { Link } from 'react-router-dom';
import '../styling/login.css';
import Logo from '../assets/logo.png';

const ForgotPassword = () => (
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
            <h1 className="login-text">Forgot Password</h1>
          </strong>
        </GridCol>
        <GridCol span={12}>
          <form>
            <TextInput placeholder="Email" autoComplete="email" required />
            <Button type="submit" fullWidth variant="filled" color="dark">
              Reset Password →
            </Button>
          </form>
        </GridCol>
        <GridCol span={12}>
          <div className="bottom-text">
            <p className="bottom">
              Need an account? <Link to="/register" className="text-bold">Sign up</Link>
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

export default ForgotPassword;