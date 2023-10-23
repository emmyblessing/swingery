import React from 'react'
import { Logout, Search, Settings } from '@mui/icons-material';
import { Avatar, Box, Chip, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ProfileImage from '../../assets/img/Profile.png';
import Football from '../../assets/img/football.png';
import Language from '../../assets/img/language.png';
import Nature from '../../assets/img/nature.png';
import Photography from '../../assets/img/photography.png';
import Writing from '../../assets/img/writing.png';

const Profile = () => {
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
                Profile
              </Typography>
            </Box>
            <Box>  
              <Box>
                <Search className='text-gray-400' />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}>
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full bg-[#9B139D] p-1">
              <span className="bg-white p-0.5 rounded-full block transform transition hover:rotate-6">
                <img src={ProfileImage} className="rounded-full" width="80" alt="Profile"/>
              </span>
            </div>
            <span className="whitespace-nowrap mt-[-15px] rounded-full bg-[#9B139D] px-2.5 py-0.5 text-sm text-white font-bold">
              75% Completed
            </span>
          </div>
          <div className='flex text-center mt-2 pl-10 items-center'>
            <div className='mr-4'>
              <span className="text-[22px] font-bold text-center mt-2">John Doe </span> <br />
              <span className='text-base text-[rgba(41, 37, 46, 0.33)]'>@johndoe</span>
            </div>
            <div>
              <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <circle cx="15" cy="15" r="15" transform="rotate(90 15 15)" fill="#CCCCCC" fillOpacity="0.6"/>
                  <path d="M16.4686 10.0788L19.9152 13.5254L12.8767 20.5648C12.6974 20.7439 12.4814 20.8819 12.2436 20.9694L12.0991 21.0158L8.54827 21.9843C8.47949 22.0032 8.40712 22.0051 8.33745 21.9897C8.26779 21.9743 8.20295 21.9421 8.14856 21.8959C8.09418 21.8497 8.05191 21.791 8.02543 21.7247C7.99894 21.6585 7.98905 21.5868 7.9966 21.5158L8.01061 21.4458L8.9791 17.8958C9.04565 17.6506 9.16474 17.423 9.32761 17.2303L9.43006 17.1182L16.4686 10.0779V10.0788ZM17.8417 8.70664C18.2886 8.26052 18.8912 8.00529 19.5226 7.99473C20.154 7.98416 20.7648 8.2191 21.2264 8.65003C21.688 9.08096 21.9642 9.67423 21.997 10.3049C22.0298 10.9355 21.8165 11.5542 21.4021 12.0307L21.2883 12.1532L20.5343 12.9063L17.0877 9.45971L17.8417 8.70664Z" fill="black" fill-opacity="0.32"/>
                </svg>
              </Link>
            </div>
          </div>
        </Box>
        <Box p={2}>
          <div>
            <span className='text-[#29252E] font-semibold text-xl'>Bio</span>
            <p className='mt-1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in sed enim suscipit phasellus nibh sed. 
            </p>
          </div>
          <div>
            <p className='mt-0 leading-none'>
              <span className='font-bold text-gray-700'>Gender:</span> Male
            </p>
            <p className='mt-0 leading-none'>
              <span className='font-bold text-gray-700'>Looking for:</span> Female
            </p>
            <p className='mt-0 leading-none'>
              <span className='font-bold text-gray-700'>Age:</span> 27 Years old
            </p>
          </div>

          <Box mt={2}>
            <span className='text-[#29252E] font-semibold text-xl'>Interest</span>
            <Box mt={2} sx={{
              display: 'flex',
            }}>
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Football" src={Football} />}
                  label="Football"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
              
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Language" src={Nature} />}
                  label="Nature"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
              
              <Box>
                <Chip
                  avatar={<Avatar alt="Language" src={Language} />}
                  label="Language"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
            </Box>
            <Box mt={2} sx={{
              display: 'flex',
            }}>
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Photography" src={Photography} />}
                  label="Photography"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
              
              <Box mr={1}>
                <Chip
                  avatar={<Avatar alt="Writing" src={Writing} />}
                  label="Writing"
                  variant="outlined"
                  sx={{
                    fontSize: '14px',
                    padding: '20px 2px',
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box mt={2} px={3}>
            <Box sx={{
              display: 'flex',
            }}>
              <Box mr={6} textAlign="center">
                <span className='text-[#29252E] font-semibold text-[22px]'>1234</span><br />
                <span className='text-[rgba(41, 37, 46, 0.45)] text-[15px]'>Visitors</span>
              </Box>
              
              <Box mr={6} textAlign="center">
                <span className='text-[#29252E] font-semibold text-[22px]'>4321</span><br />
                <span className='text-[rgba(41, 37, 46, 0.45)] text-[15px]'>Likes</span>
              </Box>
              
              <Box textAlign="center">
                <span className='text-[#29252E] font-semibold text-[22px]'>2345</span><br />
                <span className='text-[rgba(41, 37, 46, 0.45)] text-[15px]'>Matches</span>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box mt={2}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Settings sx={{
                    textAlign: 'center',
                    color: '#ffffff',
                    width: '27px',
                    height: '27px',
                    padding: '4px',
                    borderRadius: '8px',
                    background: '#54B7A6',
                  }} />
                </ListItemIcon>
                <Link href="/settings" sx={{textDecoration: 'none', color: '#000'}}>
                  <ListItemText primary="Settings" primaryTypographyProps={{
                    fontSize: '16px',
                    fontWeight: 'medium',
                    letterSpacing: 0,
                  }} />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Logout sx={{
                    textAlign: 'center',
                    color: '#ffffff',
                    width: '27px',
                    height: '27px',
                    padding: '4px',
                    borderRadius: '8px',
                    background: '#ED4C5C',
                  }} />
                </ListItemIcon>
                <ListItemText primary="Sign Out" primaryTypographyProps={{
                  fontSize: '16px',
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </div>
  )
}

export default Profile;
