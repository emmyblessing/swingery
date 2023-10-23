import React from 'react'
import { Box, Link, Typography } from '@mui/material';
import Button from '../Button';
import SwingerySmall from '../../assets/img/Swingery-Logo-Small.png'
import Google from '../../assets/img/google.png';
import Facebook from '../../assets/img/facebook.png';
import Apple from '../../assets/img/apple.png';
import FormInputField from '../FormInput/FormInputField';
import PasswordField from '../FormInput/PasswordField';

const LoginPage = () => {
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
        <Box mt={2} p={2}>
          <Typography 
            variant='h4' 
            sx={{
              fontWeight: 'bold', 
              fontSize: '22px', 
              fontFamily: 'Dm Sans'
            }}
          >
            Login to your account
          </Typography>
          <Box mt={1}>
            <Typography variant='p' fontSize={14}>
              Welcome to <b>FRNDR</b>, enter your details below to <br />
              continue.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Box sx={{marginLeft: '-150px'}}>
            <Typography variant='p' fontSize={16} fontWeight="bold" color="#263238">
              Email/ Mobile Number
            </Typography>
          </Box>
          <Box mt={1}>
            <FormInputField name="email" placeholder="Enter your username or email" type="email"/>
          </Box>

          <Box mt={2} sx={{marginLeft: '-250px'}}>
            <Typography variant='p' fontSize={16} fontWeight="bold" color="#263238">
              Password
            </Typography>
          </Box>
          <Box mt={1}>
            <PasswordField />
          </Box>
          <Box mt={2}>
            <Link href="/" sx={{
              color: 'rgba(27, 29, 37, 0.64)',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
            }}>
              Forgot password?
            </Link>
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
            <Button size="320px" label="Login" type="Submit" />
          </Box>
          
          <Box mt={2} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItem: 'center',
          }}>
            <Box color="#BFBFBF">
              ___________________
            </Box>
            <Box m={1}>
              <Typography variant='h2' fontSize={16} fontWeight="bold" color="#BFBFBF">
                OR
              </Typography>
            </Box>
            <Box color="#BFBFBF">
              ___________________
            </Box>
          </Box>
          <Box mt={2} sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <Box mr={5}>
              <img src={ Google } alt='Swingery logo' />
            </Box>
            <Box mr={5}>
              <img src={ Facebook } alt='Swingery logo' />
            </Box>
            <Box>
              <img src={ Apple } alt='Swingery logo' />
            </Box>
          </Box>
          <Box mt={2} mb={2}>
            <Link href="/register" sx={{
              textDecoration: 'none',
              color: '#3B3237',
              fontSize: '16px',
            }}>
              Don’t have an account? <b>Register</b>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default LoginPage;
