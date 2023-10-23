import React from 'react'
import Swingery from '../../assets/img/Swingery-Logo-Small.png';
import { Box, Link, Typography } from '@mui/material';
import Button from '../Button';
import ButtonOutline from '../ButtonOutline';

const WelcomePage = () => {
  return (
    <div>
      <Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					textAlign: 'center',
				}}>
        <Box mt={18}>
          <img src={ Swingery } alt='Swingery logo' />
        </Box>
        <Box mt={10} p={2}>
          <Typography 
            variant='h4' 
            sx={{
              fontWeight: 'bold', 
              fontSize: '27px', 
              fontFamily: 'Cambria'
            }}
          >
            Welcome to Swingery
          </Typography>
          <Box mt={1}>
            <Typography variant='p' fontSize={17}>
              Lorem ipsum dolor sit amet, <br /> 
              consectetur adipiscing elit. Nisi, etium <br /> 
              maecenas sed urna
            </Typography>
          </Box>
        </Box>
        <Box
          mt={5}
          mb={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link href="/login">
            <ButtonOutline size="320px" label="Login" type="Submit" />
          </Link>
          <Link href="/register">
            <Button size="320px" label="Register" type="Submit" />
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default WelcomePage;