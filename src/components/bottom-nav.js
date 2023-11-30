// BottomNavBar.js
import React from 'react';
import { Container, Grid, GridCol, Image } from '@mantine/core';
import CreateSpotIcon from '../assets/createspot.png';
import ProfileIcon from '../assets/profile.png';
import NotificationsIcon from '../assets/notification.png';
import '../styling/bottom-nav.css';
import { Link } from 'react-router-dom';

const BottomNavBar = () => {
  return (
    <div className="bottom-nav-container">
      <Container size="xs">
        <Grid classname="">
          {/* Images in the same GridCol with spacing */}
          <GridCol>
              <Image className="nav-sec" src={CreateSpotIcon} alt="New Spot" style={{ marginBottom: '10px' }} />
              <Image className="nav-sec" src={ProfileIcon} alt="Profile" style={{ marginBottom: '10px' }} />
              <Image className="nav-sec" src={NotificationsIcon} alt="Notifications" style={{ marginBottom: '10px' }} />
          </GridCol>

          {/* Text in the same GridCol with smaller font size */}
          <GridCol style={{ fontSize: '12px', textAlign: 'center', display: 'flex', justifyContent: 'space-between', margin: '0 auto', width: '245px' }}>
            <Link to="/path-for-new-spot" style={{ marginLeft: '10px' }}>New Spot</Link>
            <Link to="/path-for-profile">Profile</Link>
            <Link to="/path-for-notifications">Notifications</Link>
          </GridCol>
        </Grid>
      </Container>
    </div>
  );
};

export default BottomNavBar;
