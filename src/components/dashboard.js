import React, { useEffect, useState, useReducer } from 'react';
import { Container, Grid, GridCol, Image, TextInput } from '@mantine/core';
import BottomNavBar from './bottom-nav.js';
import MiniFish from '../assets/minifish.png';
import mapSample from '../assets/mapSample.png';
import newSpotMark from '../assets/newSpotMark.png';
import spotMark from '../assets/spotMarker.png';
import closePNG from '../assets/closePNG.png';
import plusIcon from '../assets/plusIcon.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth } from './authcontext.js'; // Adjust the path to the AuthContext file
import { useNavigate } from 'react-router-dom'; 
import locationData from "../location.json";
import { setLocations } from './authcontext.js';
import '../styling/login.css';
import '../styling/dashboard.css';
import SpotInfoPopup from './spot-info'; // Updated import statement

//infomation popup stub (Need to connect to json file)
const InformationPopup = ({ onClose, onSave, spotInformation, setSpotInformation, selectedCell }) => {
  const [spotName, setSpotName] = useState('');
  const [Location_group, setLocation_group] = useState('');
  const [Group_id, setGroup_id] = useState('');
  const [Location_coords_x, setLocation_coords_x] = useState('');
  const [Location_coords_y, setLocation_coords_y] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [species, setSpecies] = useState('');
  const [depth, setDepth] = useState('');
  const [warnings, setWarnings] = useState('');
  const navigate = useNavigate();

  const { user, login, locations, setLocations } = useAuth();
  //const { grid, selectedCell, handleClick } = Dashboard();

  const onSubmit = () => {
 
    const newLocation = {
      Location_name: spotName,
      Location_group: Location_group,
      group_id: Group_id,
      Location_coords_x: selectedCell.row,
      Location_coords_y: selectedCell.col,
      description: description,
      tags: tags,
      species: species,
      depth: depth,
      warnings: warnings,
    };

    locations.push(newLocation);
    
    console.log('Spot information saved:', { spotName, Location_coords_x, Location_coords_y, description, tags, species, depth, warnings });

    onClose();

    navigate('/render');
  };

  return (
    <div className="popup">
      <button className="popup-close-button" onClick={onClose}>
        X {/*<img src={closePNG} alt="close" />*/}
      </button>
      <div>
        <label htmlFor="spotName">Spot Name:</label>
        <input
          type="text"
          id="spotName"
          value={spotName}
          onChange={(e) => setSpotName(e.target.value)}
          
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="tags">Tags:</label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="species">Species:</label>
        <input
          type="text"
          id="species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="depth">Depth:</label>
        <input
          type="text"
          id="depth"
          value={depth}
          onChange={(e) => setDepth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="warnings">Warnings:</label>
        <textarea
          id="warnings"
          value={warnings}
          onChange={(e) => setWarnings(e.target.value)}
        />
      </div>
      <button onClick={onSubmit}>
         Submit 
      </button>
    </div>
  );
};



const Dashboard = () => {
  const { user, login, locations, setLocations } = useAuth();
  const navigate = useNavigate();

  const [grid, setGrid] = useState(Array.from({ length: 10 }, () => Array(10).fill(null)));
  const [selectedCell, setSelectedCell] = useState(null);
  const [MapGrid, setMapGrid] = useState(false);
  const [createLocation, setCreateLocation] = useState(true);
  const [exitButton, setExitButton] = useState(false);
  const [CreateLocInfo, setCreateLocInfo] = useState(false);
  const [CreateSpotGrid, setCreateNewSpot] = useState(false);
  const [showPopup, setShowPopup] = useState(false);	
  const [forceUpdate, setForceUpdate] = useState(false);
  const [SpotInfo, setSpotInfo] = useState({
    spotName: '',
    Location_name: '',
    Location_group: '',
    group_id: '',
    Location_coords_x: '',
    Location_coords_y: '',
    description: '',
    tags: '',
    species: '',
    depth: '',
    warnings: '',
  });
  const [LocationInfo, setLocationInfo] = useState({
    Location_name: '',
    Location_group: '',
    group_id: '',
    Location_coords_x: '',
    Location_coords_y: '',
    description: '',
    tags: '',
    species: '',
    depth: '',
    warnings: '',
  });

  useEffect(() => {
    const newGrid = Array.from({ length: 10 }, () => Array(10).fill(null));

    locations.forEach(({ Location_coords_x, Location_coords_y }) => {
      if (Location_coords_x >= 0 && Location_coords_x <= 10 && Location_coords_y >= 0 && Location_coords_y <= 10) {
        newGrid[Location_coords_x][Location_coords_y] = 
        <img src={spotMark}/>; 
      }
    });

    console.log(user);
    console.log(locations);

    setGrid(newGrid);
  }, []);

  const handleClick = (row, col) => {
    if(MapGrid){
      console.log(`Clicked on cell (${row}, ${col})`);
      setSelectedCell({row, col});
      setCreateLocInfo(true);

    }
    
  };

  const handleCreateLocationClick = () => {
    setMapGrid(true);
    setCreateLocation(false);
    setExitButton(true); 
    setShowPopup(false); 
  };

  const handleExitButtonClick = () => {

    setMapGrid(false);
    setCreateLocation(true);
    setExitButton(false); 
    setCreateLocInfo(false);
  };
 
     
  const handleSpotClick=()=>
  {
    if(MapGrid === false)
    setShowPopup(true); 
  }


  const handleCreateLocInfoClose = () => {
    setMapGrid(false);
    setCreateLocation(true);
    setExitButton(false); 
    setCreateLocInfo(false);
  };

  const handleCreateLocInfoSubmit = () => {
    handleCreateLocInfoClose();
  };


  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
    else {
      console.log(user);
      console.log(locations);
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

              {!CreateLocInfo && grid.map((row, rowIndex) => (

                <div key={rowIndex} className="grid-row">
                  {row.map((cell, colIndex) => (
                    <div
                      key={colIndex}

                      className={`grid-cell ${MapGrid && selectedCell && selectedCell.row === rowIndex && selectedCell.col === colIndex ? 'selected' : ''}`} //"grid-cell"

                      onClick={() => handleClick(rowIndex, colIndex)}
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              ))}


              {!CreateLocInfo && (
                <img
                  src={mapSample}
                  alt="mapSample"
                  className="map-overlay"
                />
              )}

             
              {!CreateLocInfo && MapGrid && selectedCell && (
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



              {!CreateLocInfo && MapGrid && (
                <img
                src={closePNG}
                alt="close"
                className="close-PNG"
              />

              )}
              
            </div>
            
            {createLocation && (
              <>
             {showPopup && <SpotInfoPopup onClose={() => setShowPopup(false)} />}
              <button className="create-location" onClick={handleCreateLocationClick}>
                  <img src={plusIcon} alt="plus" /> Create Location
              </button>
              </>
            )}


          </div>

          {/* need to handle case where on submit we go back to map  */}
          {CreateLocInfo && (
            //handleCreateLocInfoSubmit
            <InformationPopup 
            onClose = {handleCreateLocInfoClose}
            onSubmit = {handleCreateLocInfoSubmit}
            SpotInfo = {SpotInfo}
            setSpotInfo = {setSpotInfo}
            selectedCell = {selectedCell}
            
            />
          )}

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
