import React from 'react'
import { Search } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import CardOne from '../../assets/img/Rectangle20.png';
import CardTwo from '../../assets/img/Rectangle 212.png';
import CardThree from '../../assets/img/Rectangle 23.png';
import CardFour from '../../assets/img/Rectangle 24.png';
import CardFive from '../../assets/img/Rectangle 27.png';
import CardSix from '../../assets/img/Rectangle 28.png';

const Favorite = () => {
  return (
    <div>
      <Box mt={2} mb={6}>
        <Box pl={3} pr={3}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <Box>  
              <Typography variant="p" fontSize={24} fontFamily="Dm Sans" fontWeight="bold">
                Favourite
              </Typography>
            </Box>
            <Box>  
              <Box>
                <Search className='text-gray-400' />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mt={1} pl={3} pr={3} sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Box mr={2}>
            <div className='relative'>
              <img src={CardOne} alt='Card One' />
              <div className='flex justify-center'>
                <div className='absolute bg-[#9F0000] text-center top-0 text-sm px-3 rounded-b-3xl'>
                  <p className='font-bold text-yellow-400 mb-[4px]'>70% Match</p>
                </div>
              </div>
              <div className='absolute bottom-0 text-white font-bold'>
                <div className='px-4'>
                  <h3 className='leading-none shadow-lg text-[15px]'>Sara Johns <br /> 
                    <span className='text-[10px] shadow-lg'>Califonia, USA ( 54 km )</span>
                  </h3>
                </div>
              </div>
            </div>
          </Box>
          
          <Box>
            <div className='relative'>
              <img src={CardTwo} alt='Card Two' />
              <div className='flex justify-center'>
                <div className='absolute bg-[#9F0000] text-center top-0 text-sm px-3 rounded-b-3xl'>
                  <p className='font-bold text-yellow-400 mb-[4px]'>70% Match</p>
                </div>
              </div>
              <div className='absolute bottom-0 text-white font-bold'>
                <div className='px-4'>
                  <h3 className='leading-none shadow-lg text-[15px]'>Amenda Grace <br /> 
                    <span className='text-[10px] shadow-lg'>Califonia, USA ( 54 km )</span>
                  </h3>
                </div>
              </div>
            </div>
          </Box>
        </Box>
        
        <Box mt={1} pl={3} pr={3} sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Box mr={2}>
            <div className='relative'>
              <img src={CardThree} alt='Card Three' />
              <div className='flex justify-center'>
                <div className='absolute bg-[#9F0000] text-center top-0 text-sm px-3 rounded-b-3xl'>
                  <p className='font-bold text-yellow-400 mb-[4px]'>70% Match</p>
                </div>
              </div>
              <div className='absolute bottom-0 text-white font-bold'>
                <div className='px-4'>
                  <h3 className='leading-none shadow-lg text-[15px]'>Lara Williams <br /> 
                    <span className='text-[10px] shadow-lg'>Califonia, USA ( 54 km )</span>
                  </h3>
                </div>
              </div>
            </div>
          </Box>
          
          <Box>
            <div className='relative'>
              <img src={CardFour} alt='Card Four' />
              <div className='flex justify-center'>
                <div className='absolute bg-[#9F0000] text-center top-0 text-sm px-3 rounded-b-3xl'>
                  <p className='font-bold text-yellow-400 mb-[4px]'>70% Match</p>
                </div>
              </div>
              <div className='absolute bottom-0 text-white font-bold'>
                <div className='px-4'>
                  <h3 className='leading-none shadow-lg text-[15px]'>Jane Smith <br /> 
                    <span className='text-[10px] shadow-lg'>Califonia, USA ( 54 km )</span>
                  </h3>
                </div>
              </div>
            </div>
          </Box>
        </Box>
        
        <Box mt={1} pl={3} pr={3} sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Box mr={2}>
            <div className='relative'>
              <img src={CardFive} alt='Card Five' />
              <div className='flex justify-center'>
                <div className='absolute bg-[#9F0000] text-center top-0 text-sm px-3 rounded-b-3xl'>
                  <p className='font-bold text-yellow-400 mb-[4px]'>70% Match</p>
                </div>
              </div>
              <div className='absolute bottom-0 text-white font-bold'>
                <div className='px-4'>
                  <h3 className='leading-none shadow-lg text-[15px]'>Jane Precious <br /> 
                    <span className='text-[10px] shadow-lg'>Califonia, USA ( 54 km )</span>
                  </h3>
                </div>
              </div>
            </div>
          </Box>
          
          <Box>
            <div className='relative'>
              <img src={CardSix} alt='Card Six' />
              <div className='flex justify-center'>
                <div className='absolute bg-[#9F0000] text-center top-0 text-sm px-3 rounded-b-3xl'>
                  <p className='font-bold text-yellow-400 mb-[4px]'>70% Match</p>
                </div>
              </div>
              <div className='absolute bottom-0 text-white font-bold'>
                <div className='px-4'>
                  <h3 className='leading-none shadow-lg text-[15px]'>Grace Peace <br /> 
                    <span className='text-[10px] shadow-lg'>Califonia, USA ( 54 km )</span>
                  </h3>
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Favorite;
