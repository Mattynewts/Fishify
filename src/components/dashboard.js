import React, { useEffect, useState } from 'react';
import { Container, Grid, GridCol, Image, TextInput } from '@mantine/core';
import BottomNavBar from './bottom-nav.js';
import MiniFish from '../assets/minifish.png';
import mapSample from '../assets/mapSample.png';
import newSpotMark from '../assets/newSpotMark.png';
import spotMark from '../assets/spotMarker.png';
import closePNG from '../assets/closePNG.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth } from './authcontext.js'; // Adjust the path to the AuthContext file
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router v6
import '../styling/login.css';
import '../styling/dashboard.css';
import SpotInfoPopup from './spot-info'; // Updated import statement

const Dashboard = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [grid, setGrid] = useState(Array.from({ length: 10 }, () => Array(10).fill(null)));
  const [selectedCell, setSelectedCell] = useState(null);
  const [CreateSpotGrid, setCreateNewSpot] = useState(false);
  const [createLocation, setCreateLocation] = useState(true);
  const [exitButton, setExitButton] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = (row, col) => {
    if(CreateSpotGrid){
      console.log(`Clicked on cell (${row}, ${col})`);
      setSelectedCell({row, col});
      
    }
    
  };

  const handleCreateLocationClick = () => {
    setCreateNewSpot(true);
    setCreateLocation(false);
    setExitButton(true); 
    setShowPopup(false); 
  };

  const handleExitButtonClick = () => {
    setCreateNewSpot(false);
    setCreateLocation(true);
    setExitButton(false); 
  };
     
  const handleSpotClick=()=>
  {
    if(CreateSpotGrid === false)
    setShowPopup(true); 
    
  }

  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
    else {
      console.log(user);
    }
    
    
  }, [user, navigate]);

  return (
    <div className='contain-dash'>
      <Container size='xs'>
        <Grid className='cont'>
          <br />
          <br />
          <br />
          <GridCol className='contain-content' style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
            <Image src={MiniFish} alt='Minifish Logo' width={50} height={30} />
            <strong>
              <h1 className='login-text-2' style={{ marginLeft: '5px' }}>
                Discovery Map
              </h1>
            </strong>
            <GiHamburgerMenu
              style={{ marginLeft: 'auto', cursor: 'pointer', fontSize: '24px' }}
            />
          </GridCol>
          <GridCol span={12}>
            <TextInput
              className='input-dash'
              placeholder='🔎 Search'
              autoComplete='username'
              required
              name='search'
              styles={{
                input: {
                  appearance: 'none',
                  backgroundColor: 'rgb(255, 255, 255)',
                  border: 'none',
                  borderBottom: '1px solid transparent',
                  boxShadow: 'none',
                  WebkitBoxShadow: 'none',
                },
              }}
            />
          </GridCol>


          <div className="map-container">
            <div className="grid-container">
              {exitButton && (
                <button className="close-button" onClick={handleExitButtonClick}>
                  X
                </button>
              )}

              {/* Grid */}
              {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                  {row.map((cell, colIndex) => (
                    <div
                      key={colIndex}
                      className={`grid-cell ${CreateSpotGrid && selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex ? 'selected' : ''}`} //"grid-cell"
                      onClick={() => handleClick(rowIndex, colIndex)}
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}

              <img
                src={mapSample}
                alt="mapSample"
                className="map-overlay"
                
              />

              <img
                src={spotMark}
                alt="spot1"
                className="spot-1"
                onClick={handleSpotClick}
              />  

              <img
                src={spotMark}
                alt="spot2"
                className="spot-2"
                onClick={handleSpotClick}
              />  

              <img
                src={spotMark}
                alt="spot3"
                className="spot-3"
                onClick={handleSpotClick}
              />  
              
              {CreateSpotGrid && selectedCell && (
                <img
                  src={newSpotMark}
                  alt="newSpotMark"
                  className="overlay-newMarker"
                  style={{
                    top: selectedCell.row * 32, 
                    left: selectedCell.col * 32, 
                  }}
                />
              )}

              {CreateSpotGrid && (
                <img
                src={closePNG}
                alt="close"
                className="close-PNG"
              />

              )}
              
            </div>
            
            {createLocation && (
              <button onClick={handleCreateLocationClick}>Create Location</button>
            )}
             {showPopup && <SpotInfoPopup onClose={() => setShowPopup(false)} />}

          </div>

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
