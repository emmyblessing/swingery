import React from 'react'
import { Box, Link, Typography } from '@mui/material';
import Button from '../Button';
import SwingerySmall from '../../assets/img/Swingery-small.png'
import FormInputField from '../FormInput/FormInputField';
import PasswordField from '../FormInput/PasswordField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { red } from '../../assets/js/customStyles'
import PhoneField from '../FormInput/PhoneField';
import SelectCountry from '../FormInput/SelectField';

const labelContent = (
  <Box color="rgba(18, 18, 29, 0.60))">
    I agree to that <b>FRNDR</b> terms and conditions. 
    <Link href="/" sx={{textDecoration: 'none', color: '#9F0000', fontWeight: 'bold'}}> Learn more.</Link>
  </Box>
);
  

const RegisterPage = () => {
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
            Register to your account
          </Typography>
          <Box mt={1}>
            <Typography variant='p' fontSize={14}>
              Fill the following essential details to getting <br />
              registered.
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
          <Box sx={{marginLeft: '-270px'}}>
            <Typography variant='p' fontSize={16} fontWeight="bold" color="#263238">
              Email
            </Typography>
          </Box>
          <Box mt={1}>
            <FormInputField name="email" placeholder="Enter your email" type="email"/>
          </Box>

          <Box mt={2} sx={{marginLeft: '-210px'}}>
            <Typography variant='p' fontSize={16} fontWeight="bold" color="#263238">
              Mobile number
            </Typography>
          </Box>
          <Box mt={1} sx={{
            display: 'flex',

          }}>
            <SelectCountry />
            <PhoneField name="number" placeholder="Enter your mobile number" type="text" />
          </Box>
          
          <Box mt={2} sx={{marginLeft: '-250px'}}>
            <Typography variant='p' fontSize={16} fontWeight="bold" color="#263238">
              Password
            </Typography>
          </Box>
          <Box mt={1}>
            <PasswordField />
          </Box>

          <Box mt={2} sx={{
            width: '317px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '12px',
          }}>
            <FormControlLabel 
              control={<Checkbox defaultChecked
                sx={{
                  color: red[500],
                  '&.Mui-checked': {
                    color: red[500],
                  },
                }}  
              />} 
              label={labelContent} 
            />
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
            <Link href="/verify">
              <Button size="320px" label="Register" type="Submit" />
            </Link>
          </Box>
          
          
          <Box mt={2} mb={2}>
            <Link href="/login" sx={{
              textDecoration: 'none',
              color: '#3B3237',
              fontSize: '16px',
            }}>
              Already have an account? <b>Login</b>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default RegisterPage;