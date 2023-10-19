import React from 'react';
import { Box, Link } from '@mui/material';
import Swingery from '../../assets/img/Swingery-light1.png'


const Home = () => {
  return (
    <div>
      <Box sx={{
        width: '100%',
        background: '#9F0000',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
        }}>
          <Link href="/onboard">
            <img src={ Swingery } alt='Swingery logo' />
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default Home;