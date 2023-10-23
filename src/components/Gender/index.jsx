import React from 'react'
import { Box, Link, Typography } from '@mui/material';
import Button from '../Button';
import SwingerySmall from '../../assets/img/Swingery-Logo-Small.png';
import GenderOption from '../GenderOption';


const GenderPage = () => {
  return (
    <div>
      <Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					textAlign: 'center',
				}}>
        <Box mt={2}>
          <img src={ SwingerySmall } alt='Swingery logo' />
        </Box>
      </Box>
      <Box mt={2}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Box mt={4}>
            <Typography variant='p' fontSize={24} fontWeight="bold" color="#000000">
              I am a
            </Typography>
          </Box>
          
          <Box mt={5}>
            <GenderOption size="216px" label="male-female" />  
          </Box>
          <Box>
            <GenderOption size="216px" label="male-male" />  
          </Box>
          <Box>
            <GenderOption size="216px" label="female-female" />  
          </Box>
          <Box>
            <GenderOption size="216px" label="male" />  
          </Box>
          <Box>
            <GenderOption size="216px" label="female" />  
          </Box>

          <Box
            mt={8}
            mb={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link href="/looking">
              <Button size="320px" label="Finish" type="submit"/>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default GenderPage;
