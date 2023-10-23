import React from 'react'
import { Search } from '@mui/icons-material';
import { Box, IconButton, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Online from '../Stories/Online';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import UserTwo from '../../assets/img/AvatarTwo.png';
import UserThree from '../../assets/img/Ellipse 40.png';
import UserFour from '../../assets/img/Ellipse 41.png';
import UserFive from '../../assets/img/Ellipse 45.png';
import UserSix from '../../assets/img/Ellipse 46.png';
import UserSeven from '../../assets/img/Ellipse 48.png';
import UserEight from '../../assets/img/Ellipse 53.png';
import UserNine from '../../assets/img/Ellipse 66.png';

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

const Messages = () => {
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
                Messages
              </Typography>
            </Box>
            <Box>  
              <Box>
                <Search className='text-gray-400' />
              </Box>
            </Box>
          </Box>
        </Box>
        
        <Box mt={1}>
          <p className="px-6 font-semibold text-base">Online</p>
          <Box mt={-2.7} pl={-4}>
            <Online />
          </Box>
        </Box>
        <Box>
          <p className="px-6 font-semibold text-base">My Chats</p>
          <Box>
            <List>
              <Link href="/chats" sx={{textDecoration: 'none', color: 'inherit'}}>
                <ListItem 
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <Box sx={{
                        textAlign: 'center',
                        color: '#ffffff',
                        width: '21px',
                        height: '21px',
                        fontFamily: 'Dm sans',
                        fontSize: '14px',
                        fontWeight: '700',
                        padding: '2px',
                        borderRadius: '50%',
                        background: '#9F0000',
                      }}>
                      2
                    </Box>
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <div className='pr-6'>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        variant="dot"
                      >
                        <Avatar alt="User Eight" src={UserEight} sx={{ width: 60, height: 60 }} />
                      </StyledBadge>
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="Anne Snow" secondary="Hello!" primaryTypographyProps={{
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }} secondaryTypographyProps={{
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }} />
                </ListItem>
              </Link>
              <Link href="/chats" sx={{textDecoration: 'none', color: 'inherit'}}>
                <ListItem 
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <Box sx={{
                        textAlign: 'center',
                        color: '#ffffff',
                        width: '21px',
                        height: '21px',
                        fontFamily: 'Dm sans',
                        fontSize: '14px',
                        fontWeight: '700',
                        padding: '2px',
                        borderRadius: '50%',
                        background: '#9F0000',
                      }}>
                      4
                    </Box>
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <div className='pr-6'>
                      <Avatar alt="User Three" src={UserThree} sx={{ width: 60, height: 60 }} />
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="Sara Williams" secondary="Thank you for the support." primaryTypographyProps={{
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }} secondaryTypographyProps={{
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }} />
                </ListItem>
              </Link>

              <Link href="/chats" sx={{textDecoration: 'none', color: 'inherit'}}>
                <ListItem>
                  <ListItemAvatar>
                    <div className='pr-6'>
                      <Avatar alt="User Four" src={UserFour} sx={{ width: 60, height: 60 }} />
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="John Smith" secondary="No worries." primaryTypographyProps={{
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }} secondaryTypographyProps={{
                    color: 'rgba(41, 37, 46, 0.33)',
                    letterSpacing: 0,
                  }} />
                </ListItem>
              </Link>

              <Link href="/chats" sx={{textDecoration: 'none', color: 'inherit'}}>
                <ListItem>
                  <ListItemAvatar>
                    <div className='pr-6'>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        variant="dot"
                      >
                        <Avatar alt="User Five" src={UserFive} sx={{ width: 60, height: 60 }} />
                      </StyledBadge>
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="John Snow" secondary="Hello!" primaryTypographyProps={{
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }} secondaryTypographyProps={{
                    color: 'rgba(41, 37, 46, 0.33)',
                    letterSpacing: 0,
                  }} />
                </ListItem>
              </Link>

              <Link href="/chats" sx={{textDecoration: 'none', color: 'inherit'}}>
                <ListItem>
                  <ListItemAvatar>
                    <div className='pr-6'>
                      <Avatar alt="User Six" src={UserSix} sx={{ width: 60, height: 60 }} />
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="Sara Williams" secondary="Thank you for the support." primaryTypographyProps={{
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }} secondaryTypographyProps={{
                    color: 'rgba(41, 37, 46, 0.33)',
                    letterSpacing: 0,
                  }} />
                </ListItem>
              </Link>

              <Link href="/chats" sx={{textDecoration: 'none', color: 'inherit'}}>
                <ListItem>
                  <ListItemAvatar>
                    <div className='pr-6'>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        variant="dot"
                      >
                        <Avatar alt="User Seven" src={UserSeven} sx={{ width: 60, height: 60 }} />
                      </StyledBadge>
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="John Smack" secondary="No worries." primaryTypographyProps={{
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }} secondaryTypographyProps={{
                    color: 'rgba(41, 37, 46, 0.33)',
                    letterSpacing: 0,
                  }} />
                </ListItem>
              </Link>
              
              <Link href="/chats" sx={{textDecoration: 'none', color: 'inherit'}}>
                <ListItem>
                  <ListItemAvatar>
                    <div className='pr-6'>
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        variant="dot"
                      >
                        <Avatar alt="User Two" src={UserTwo} sx={{ width: 60, height: 60 }} />
                      </StyledBadge>
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="James Smith" secondary="No worries." primaryTypographyProps={{
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }} secondaryTypographyProps={{
                    color: 'rgba(41, 37, 46, 0.33)',
                    letterSpacing: 0,
                  }} />
                </ListItem>
              </Link>

              <Link href="/chats" sx={{textDecoration: 'none', color: 'inherit'}}>
                <ListItem>
                  <ListItemAvatar>
                    <div className='pr-6'>
                      <Avatar alt="User Nine" src={UserNine} sx={{ width: 60, height: 60 }} />
                    </div>
                  </ListItemAvatar>
                  <ListItemText primary="Daniel Smith" secondary="No worries." primaryTypographyProps={{
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }} secondaryTypographyProps={{
                    color: 'rgba(41, 37, 46, 0.33)',
                    letterSpacing: 0,
                  }} />
                </ListItem>
              </Link>
            </List>
          </Box>
        </Box>

      </Box>
    </div>
  )
}

export default Messages;
