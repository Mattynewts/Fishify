import React from 'react';
import '../styling/spot-info.css'; // Import the CSS for styling
import closeIcon from '../assets/closePNG.png'; // Import your close icon image
import { useAuth } from './authcontext.js';
import { Container, Grid, GridCol, Image, TextInput, Text, Button, Avatar } from '@mantine/core';

const SpotInfoPopup = ({ onClose }) => {
  const { user } = useAuth();
  return (
    <div className="spot-info-popup">
      {/* Close button with image */}
      
      <img className="closeimg" src={closeIcon} alt="Close" onClick={onClose} />
      <Text className="header" size="l" weight={500}>{user?.name}'s Secret Spot </Text>
      <h1 className='h1'>This spot is really good </h1>
      {/* Round rectangle divs */}
      <div className="item-container">
        <div className="round-rectangle" style={{ backgroundColor: '#F5CCFF' }}>Flys</div>
        <div className="round-rectangle" style={{ backgroundColor: '#FFA1A1' }}>Bait-Fishing</div>
        <div className="round-rectangle" style={{ backgroundColor: '#DCFFCF' }}>Spin Cast</div>
      </div>
      <h2 className='species'> species</h2>
      <div className="item-container">
        <div className="round-rectangle" style={{ backgroundColor: '#FFEAB6' }}>Pike</div>
        <div className="round-rectangle" style={{ backgroundColor: '#FF8787' }}>Walleyes</div>
        <div className="round-rectangle" style={{ backgroundColor: '#95CBFD' }}>Brook Trout</div>
      </div>
      <h3 className='species'>Warnings</h3>
      <div className='info'>Big Waves</div>
      <h3 className='species'>Recent Catches</h3>
      <div className='info'>No Recent Catches</div>
      <div className="upload-box">
        <label htmlFor="file-upload" className="custom-file-upload">
          
        </label>
        <input id="file-upload" type="file" />
      </div>

    </div>
  );
};

export default SpotInfoPopup;
