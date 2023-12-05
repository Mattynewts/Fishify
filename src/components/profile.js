import React from 'react';
import { Container, Grid, GridCol, Image, TextInput, Text, Button, Avatar } from '@mantine/core';
import { useAuth } from './authcontext.js';
import BottomNavBar from './bottom-nav.js';
import '../styling/profile.css';
import MiniFish from '../assets/minifish.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import profilepic from'../assets/FrankyProfilePic.png'
import { useNavigate } from 'react-router-dom'; 

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const openHamburgerMenu = () => {
    navigate('/menu'); 
  };

  return (
    <div className="profile-container">
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <Grid>
          <GridCol className='contain-content' style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
            <Image src={MiniFish} alt='Minifish Logo' width={50} height={30} style={{ marginLeft: '5px' , marginTop:'10px'}} />
            <strong>
              <h1 className='login-text-2' style={{ marginLeft: '5px' , marginTop:'10px'}}>
                Profile
              </h1>
            </strong>
            <GiHamburgerMenu onClick={openHamburgerMenu}
              style={{ marginLeft: 'auto', cursor: 'pointer', fontSize: '24px',marginRight:'20px',marginTop:'15px' }}
            />
          </GridCol>

          {/* New div for rectangle container */}
          <div className="rectangle-container">
            <div className="profile-header">
            <Image src={user?.picture} className="profile-picture" style={{ width: '140px', height: '140px', borderRadius: '50%' }} 
            />
              <Text size="xl" weight={500}>{user?.name}</Text>
            </div>
            <div className="round-rectangle">
              <Text  className="Username">{user?.name}</Text>
              <Text className="info-text"> {user?.Location}</Text>
              <Text className="info-text"> {user?.info}</Text>
            </div>

            <div className="round-rectangle">
            <Text className="phone"><strong>Phone: </strong>{user?.Phone}</Text>
            </div>

            <div className="round-rectangle">
            <Text className="phone"><strong>Email:</strong>  {user?.email}</Text>
            </div>
            <GridCol span={12}>
              <TextInput
                className='input-dash input-no-focus-outline'
                placeholder=''
                autoComplete=''
                required
                name=''
                styles={{
                  input: {
                    appearance: 'none',
                    backgroundColor: 'white',
                    border: 'none',
                    borderBottom: '1px solid transparent',
                    boxShadow: 'none',
                    WebkitBoxShadow: 'none',
                    width: '320px',
                    zIndex: '-1'
                  },
                }}
              />
            </GridCol>
          </div> {/* End of rectangle container */}

        </Grid>
      </Container>
      <div className="bottom-nav-wrapper">
      <BottomNavBar selectedTab={2} />
      </div>
    </div>
  );
};

export default Profile;
