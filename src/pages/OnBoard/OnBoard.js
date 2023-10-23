import React from 'react';
import { Box, Link } from '@mui/material';
import SwingeryThumb from '../../assets/img/SwingeryLogo.png';


const OnBoard = () => {
  return (
    <div>
      <Box sx={{
        width: '100%',
        background: '#FFFFFF',
        height: '100vh',
        display: "flex",
        flexDirection: 'column',
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',
          borderRadius: '0 0 645px 645px',
          opacity: '0.17',
          width: '245px',
          height: '245px',
          background: 'radial-gradient(50% 50% at 50% 50%, #9F0000 0%, rgba(255, 255, 255, 0.00) 100%)',
        }}>
        </Box>
        <Box mt={10} sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Link href="/welcome">
            <img src={ SwingeryThumb } alt='Swingery logo' />
          </Link>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'flex-end',
          borderRadius: '0 0 645px 645px',
          position: 'absolute',
          bottom: '0',
          right: '0',
          opacity: '0.17',
          width: '245px',
          height: '245px',
          background: 'radial-gradient(50% 50% at 50% 50%, #9F0000 0%, rgba(255, 255, 255, 0.00) 100%)',
        }}>
        </Box>
      </Box>
    </div>
  )
}

export default OnBoard;
