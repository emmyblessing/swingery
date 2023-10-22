import React from 'react'
import { Box } from '@mui/system';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.css';
import AvatarOne from '../../assets/img/AvatarOne.png';
import AvatarTwo from '../../assets/img/AvatarTwo.png';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Online = () => {
  return (
    <div>
      <Box sx={{
        width: '100%',
        position: 'relative',
      }}>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div>
              <div className="mt-2">
                <div className='p-4'>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar alt="Avatar One" src={AvatarOne} sx={{ width: 60, height: 60 }} />
                  </StyledBadge>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="mt-2">
                <div className='p-4'>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar alt="Avatar Two" src={AvatarTwo} sx={{ width: 60, height: 60 }} />
                  </StyledBadge>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="mt-2">
                <div className='p-4'>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar alt="Avatar Three" src="https://i.imgur.com/eMaYwXn.jpg" sx={{ width: 60, height: 60 }} />
                  </StyledBadge>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-2">
              <div className='p-4'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar Four" src="https://i.imgur.com/zQZSWrt.jpg" sx={{ width: 60, height: 60 }} />
                </StyledBadge>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-2">
              <div className='p-4'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar Five" src="https://i.imgur.com/uIgDDDd.jpg" sx={{ width: 60, height: 60 }} />
                </StyledBadge>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-2">
              <div className='p-4'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar Six" src="https://i.imgur.com/tT8rjKC.jpg" sx={{ width: 60, height: 60 }} />
                </StyledBadge>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-2">
              <div className='p-4'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar Seven" src="https://i.imgur.com/aq39RMA.jpg" sx={{ width: 60, height: 60 }} />
                </StyledBadge>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-2">
              <div className='p-4'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar Four" src="https://i.imgur.com/zQZSWrt.jpg" sx={{ width: 60, height: 60 }} />
                </StyledBadge>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-2">
              <div className='p-4'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar Five" src="https://i.imgur.com/uIgDDDd.jpg" sx={{ width: 60, height: 60 }} />
                </StyledBadge>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-2">
              <div className='p-4'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar Five" src="https://i.imgur.com/uIgDDDd.jpg" sx={{ width: 60, height: 60 }} />
                </StyledBadge>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-2">
              <div className='p-4'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar Six" src="https://i.imgur.com/tT8rjKC.jpg" sx={{ width: 60, height: 60 }} />
                </StyledBadge>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-2">
              <div className='p-4'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar Seven" src="https://i.imgur.com/aq39RMA.jpg" sx={{ width: 60, height: 60 }} />
                </StyledBadge>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-2">
              <div className='p-4'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar Four" src="https://i.imgur.com/zQZSWrt.jpg" sx={{ width: 60, height: 60 }} />
                </StyledBadge>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mt-2">
              <div className='p-4'>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Avatar Five" src="https://i.imgur.com/uIgDDDd.jpg" sx={{ width: 60, height: 60 }} />
                </StyledBadge>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Box>
    </div>
  )
}

export default Online;