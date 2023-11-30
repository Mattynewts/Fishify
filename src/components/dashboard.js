import React from 'react';
import { Container, Grid, GridCol, Image, TextInput } from '@mantine/core';
import BottomNavBar from './bottom-nav.js';
import MiniFish from '../assets/minifish.png'
import { GiHamburgerMenu } from "react-icons/gi";
import '../styling/login.css';
import '../styling/dashboard.css';

const Dashboard = () => {
  return (
    <div className='contain-dash'>
      <Container size="xs">
        <Grid className='cont'>
          <br />
          <br />
          <br />
          <GridCol className="contain-content" style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
            <Image src={MiniFish} alt="Minifish Logo" width={40} height={25} />
            <strong><h1 className="login-text-2" style={{ marginLeft: '5px' }}>Discovery Map</h1></strong>
            <GiHamburgerMenu style={{ marginLeft: 'auto', cursor: 'pointer', fontSize: '24px' }} />
          </GridCol>
          <GridCol span={12}>
            <TextInput
              className='input-dash'
              placeholder="🔎 Search"
              autoComplete="username"
              required
              name="search"
              styles={{
                input: {
                  appearance: 'none',
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: 'none',
                  borderBottom: '1px solid transparent',
                  boxShadow: 'none',
                  WebkitBoxShadow: 'none'
                },
              }}
            />
          </GridCol>
        </Grid>
        <br />
        <br />
        <br />
        <BottomNavBar />
      </Container>
    </div>
  );
};

export default Dashboard;
