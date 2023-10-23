import { Search } from '@mui/icons-material';
import { Box, Slider, Typography } from '@mui/material';
import React from 'react'
import BackIcon from '../Back';
import LocationField from '../FormInput/LocationField';
import { styled } from '@mui/material/styles';

const CustomizeSlider = styled(Slider)({
  color: '#25D416',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 34,
    width: 34,
    backgroundColor: '#25D416',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 40,
    height: 40,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

function valueLabelFormat(value) {
  const units = ['m', 'km',];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value) {
  return 2 ** value;
}

function valuetext(value) {
  return `${value}km`;
}

const minDistance = 18;

const SettingsPage = () => {
  const [value, setValue] = React.useState(18);
  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };


  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <div>
      <Box pl={0} pr={3}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Box sx={{display: 'flex', alignItems: 'center'}}> 
            <Box>
              <BackIcon navigation="/dashboard"/>
            </Box>
            <Typography variant="p" fontSize={24} fontFamily="Dm Sans" fontWeight="bold">
              Settings
            </Typography>
          </Box>
          <Box>  
            <Box>
              <Search className='text-gray-400' />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={2} pl={3} pr={3}>
        <p className='text-base uppercase text-[rgba(41, 37, 46, 0.42)]'>Account Settings</p>
        <div className='flex justify-between'>
          <p className='font-semibold self-start'>Phone number</p>
          <p className='text-[#29252E] font-semibold self-end'>91121334243</p>
        </div>
        <div className='flex justify-between'>
          <p className='font-semibold self-start'>Email</p>
          <p className='text-[#F00000] font-semibold self-end'>johndoe@gmail.com</p>
        </div>
        <Box>
          <p className='text-base uppercase text-[rgba(41, 37, 46, 0.42)]'>Discovery</p>
          <Box>
            <p className='font-semibold'>Location</p>
            <Box sx={{width: '100%'}}>
              <LocationField />
            </Box>
          </Box>
        </Box>
        <Box mt={2}>
          <div className='flex justify-between'>
            <p className='font-semibold self-start'>Distance</p>
            <p className='text-[#29252E] font-semibold self-end'>
              {valueLabelFormat(calculateValue(value))}
            </p>
          </div>

          <Box mt={2}>
            <CustomizeSlider
              value={value}
              min={5}
              step={1}
              max={30}
              scale={calculateValue}
              getAriaValueText={valueLabelFormat}
              valueLabelFormat={valueLabelFormat}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
          </Box>
        </Box>
        <Box mt={2}>
          <div className='flex justify-between'>
            <p className='font-semibold self-start'>Age Range</p>
            <p className='text-[#29252E] font-semibold self-end'>2-6</p>
          </div>

          <Box mt={2}>
            <CustomizeSlider
              getAriaLabel={() => 'Minimum distance shift'}
              value={value2}
              onChange={handleChange2}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
            />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default SettingsPage;
