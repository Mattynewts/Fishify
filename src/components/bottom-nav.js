// BottomNavBar.js
import React from 'react';
import { Container, Grid, GridCol, Image } from '@mantine/core';
import ProfileIcon from '../assets/profile.png';
import CreateSpotIcon from '../assets/Address.png';
import NotificationsIcon from '../assets/notification.png';
import SelectedCreateSpotIcon from '../assets/createspot.png';
import SelectedProfileIcon from '../assets/client-management.png';
import SelectedNotificationIcon from '../assets/home-alarm.png';

import '../styling/bottom-nav.css';
import { Link } from 'react-router-dom';

const BottomNavBar = ({ selectedTab }) => {
  // Define the icons based on the selected tab
  let createSpotIcon = selectedTab === 1 ? SelectedCreateSpotIcon : CreateSpotIcon;
  let profileIcon = selectedTab === 2 ? SelectedProfileIcon : ProfileIcon;
  let notificationsIcon = selectedTab === 3 ? SelectedNotificationIcon : NotificationsIcon;

  return (
    <div className="bottom-nav-container">
      <Container size="xs">
        <Grid className="">
          <GridCol>
            <Image className="nav-sec" src={createSpotIcon} alt="New Spot" style={{ marginBottom: '10px' }} />
            <Image className="nav-sec" src={profileIcon} alt="Profile" style={{ marginBottom: '10px' }} />
            <Image className="nav-sec" src={notificationsIcon} alt="Notifications" style={{ marginBottom: '10px' }} />
          </GridCol>
          <GridCol style={{ fontSize: '12px', textAlign: 'center', display: 'flex', justifyContent: 'space-between', margin: '0 auto', width: '245px' }}>
            <Link to="/dashboard" style={{ marginLeft: '10px' }}>New Spot</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/path-for-notifications">Notifications</Link>
          </GridCol>
        </Grid>
      </Container>
    </div>
  );
};

export default BottomNavBar;
