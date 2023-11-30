import React, { useState } from 'react';
import { Container, Grid, GridCol, Image, TextInput } from '@mantine/core';
import BottomNavBar from './bottom-nav.js';
import '../styling/login.css';
import '../styling/dashboard.css'

const Dashboard = () => {
  return (
    <div className='contain-dash'>
      <Container size="xs">
        <Grid>
          <br></br>
          <br></br>
          <br></br>
          <GridCol span={12}>
            <strong><h1 className="login-text-2">Discovery Map</h1></strong>
          </GridCol>
          <GridCol span={12}>
              <TextInput 
                className='input'
                placeholder="Search"
                autoComplete="username"
                required
                name="search"
              />
          </GridCol>
        </Grid>
          <br></br>
          <br></br>
          <br></br>
        < BottomNavBar />
      </Container>
    </div>
  );
};

export default Dashboard;