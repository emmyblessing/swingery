import React from 'react'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import BackIcon from '../Back';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import UserNine from '../../assets/img/Ellipse 66.png';
import ChatField from '../FormInput/ChatField';

const Encrypt = (
  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
    <path d="M1.27539 9.52237C1.27539 9.52237 2.19019 12.6628 2.71092 13.3331C3.07901 13.8059 3.64954 14.3404 5.14245 13.9824C5.14245 13.9824 6.30842 13.8342 7.7537 12.5677C7.7537 12.5677 8.63061 11.9233 8.72154 10.6692C8.79083 9.72605 8.81357 6.16965 8.81357 6.16965C8.81357 6.16965 8.67608 5.28333 7.42025 5.28333C6.16335 5.28333 4.42144 6.22026 3.10391 7.10165C1.7853 7.98427 1.27539 9.52237 1.27539 9.52237Z" fill="#FCC21B"/>
    <path d="M2.56094 7.48558C3.74748 6.60667 4.82251 6.09561 5.54136 5.7475C5.54136 5.7475 7.2627 4.86859 8.20673 5.53024C8.20673 5.53024 9.33155 6.47458 7.33848 7.92134C5.36273 9.35452 4.04736 9.89643 4.04736 9.89643C4.04736 9.89643 2.34659 10.6766 1.65372 9.58536C1.22068 8.90025 1.75224 8.08429 2.56094 7.48558Z" fill="white"/>
    <path d="M2.83576 10.5026C2.20677 10.5026 1.71635 10.2544 1.41755 9.78289C1.23675 9.49774 1.16963 9.16815 1.22484 8.82991C1.3147 8.27812 1.73259 7.7004 2.40055 7.2054C3.58276 6.32895 4.66211 5.80925 5.37772 5.46361L5.42752 5.43892C5.46108 5.42164 6.39861 4.94885 7.31017 4.94885C7.72805 4.94885 8.08206 5.04884 8.36246 5.24512C8.37004 5.25005 8.37653 5.25499 8.38303 5.26116C8.55191 5.40312 8.83339 5.7821 8.81823 6.30426C8.79983 6.9437 8.35488 7.58437 7.49854 8.20529C5.51737 9.64217 4.20417 10.1903 4.14896 10.2125C4.13272 10.2199 3.51022 10.5026 2.83576 10.5026ZM7.31017 5.62038C6.52636 5.62038 5.6711 6.04997 5.66244 6.0549L5.60723 6.08206C4.91111 6.41659 3.8599 6.92395 2.72209 7.76706C2.2046 8.14974 1.8625 8.5929 1.80404 8.95089C1.77806 9.11136 1.8062 9.24962 1.89498 9.38788C2.08119 9.68167 2.39731 9.83104 2.83576 9.83104C3.39763 9.83104 3.9346 9.58785 3.94002 9.58662C3.96275 9.57674 5.26188 9.03236 7.18242 7.63868C7.84605 7.15725 8.21847 6.67459 8.23038 6.28204C8.23796 6.01787 8.07448 5.84258 8.04092 5.80802C7.85472 5.68334 7.60896 5.62038 7.31017 5.62038Z" fill="#FCC21B"/>
    <path d="M3.49856 9.10519C2.96484 9.43602 2.6249 9.20765 2.4008 8.95089C2.17453 8.69289 1.39181 7.33254 1.11466 6.21785C0.639401 4.31435 0.934952 1.74426 3.44443 0.503658C7.174 -1.33812 7.82248 2.38 7.84089 3.51074C7.85713 4.51433 7.73154 6.07836 7.672 6.35734C7.62978 6.55362 7.60813 6.7968 7.18375 6.99925C6.97156 7.10047 6.56125 7.0227 6.42376 6.78939C6.10764 6.25241 7.15127 0.840658 4.14163 2.52443C1.38315 4.06747 3.77138 8.18677 3.77138 8.18677C3.77138 8.18677 4.03445 8.77313 3.49856 9.10519Z" fill="#78A3AD"/>
    <path d="M6.7436 10.1803C6.61693 9.90505 6.21961 9.89765 5.85586 10.1643C5.49319 10.4309 5.30265 10.8704 5.42931 11.1457C5.51592 11.3345 5.73028 11.3938 5.9717 11.3296L5.87102 12.1888L6.6808 11.7061L6.39608 11.0938C6.70462 10.8259 6.86052 10.4346 6.7436 10.1803Z" fill="#2F2F2F"/>
  </svg>
);

const Add = (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
    <path d="M14.7 0H6.3C2.82555 0 0 2.82555 0 6.3V19.95C0 20.2285 0.110625 20.4955 0.307538 20.6925C0.504451 20.8894 0.771523 21 1.05 21H14.7C18.1744 21 21 18.1744 21 14.7V6.3C21 2.82555 18.1744 0 14.7 0ZM18.9 14.7C18.9 17.0163 17.0163 18.9 14.7 18.9H2.1V6.3C2.1 3.9837 3.9837 2.1 6.3 2.1H14.7C17.0163 2.1 18.9 3.9837 18.9 6.3V14.7Z" fill="#9F0000"/>
    <path d="M11.55 5.25H9.45V9.45H5.25V11.55H9.45V15.75H11.55V11.55H15.75V9.45H11.55V5.25Z" fill="#9F0000"/>
  </svg>
)

const Send = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M23.6954 0.291234C23.5604 0.156908 23.3899 0.0639048 23.2039 0.0231609C23.0179 -0.0175829 22.8241 -0.00437409 22.6454 0.0612345L0.645352 8.06123C0.45562 8.1332 0.292272 8.26118 0.177003 8.42819C0.0617345 8.59519 0 8.79331 0 8.99623C0 9.19916 0.0617345 9.39728 0.177003 9.56428C0.292272 9.73128 0.45562 9.85927 0.645352 9.93123L9.23535 13.3612L15.5754 7.00123L16.9854 8.41123L10.6154 14.7812L14.0554 23.3712C14.1295 23.5573 14.2577 23.7168 14.4235 23.8292C14.5894 23.9415 14.7851 24.0014 14.9854 24.0012C15.1874 23.9971 15.3835 23.9318 15.5478 23.814C15.712 23.6962 15.8367 23.5313 15.9054 23.3412L23.9054 1.34123C23.9735 1.16431 23.9899 0.971665 23.9527 0.785758C23.9156 0.599851 23.8263 0.428345 23.6954 0.291234Z" fill="#9F0000"/>
  </svg>
)

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

const ChatsPage = () => {
  return (
    <div>
      <Box mt={1}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'fixed',
          top: '0',
          width: '100%',
          background: '#ffffff',
        }}>
          <Box ml={-1.5}>
            <BackIcon navigation="/dashboard" />
          </Box>
          <Box ml={-2}>
            <List href="/chats" sx={{textDecoration: 'none', color: 'inherit'}}>
              <ListItem>
                <ListItemAvatar>
                  <div className='pr-4'>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                      variant="dot"
                    >
                      <Avatar alt="User Nine" src={UserNine} sx={{ width: 45, height: 45 }} />
                    </StyledBadge>
                  </div>
                </ListItemAvatar>
                <ListItemText primary="John Snow" secondary="Online" primaryTypographyProps={{
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }} secondaryTypographyProps={{
                  color: 'rgba(41, 37, 46, 0.33)',
                  letterSpacing: 0,
                }} />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box p={2} sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box mt={9} sx={{
          display: 'flex',
          background: 'rgba(235, 235, 235, 0.39)',
          borderRadius: '5px',
          textAlign: 'center',
          padding: '0 15px 0 5px',
        }}>
          <Box p={2}>
            {Encrypt}
          </Box>
          <Box>
            <p className="text-xs text-gray-600">
              Messages are end-to-end encrypted. No one outside of this chat, not even TLC, can read or listen to them.
            </p>
          </Box>
        </Box>
      </Box>
      <Box mt={1} mb={2}>
        <div class="flex-grow overflow-y-auto">
          <div class="flex flex-col space-y-2 px-4">
            <div class="self-end w-[200px] bg-[#9F0000] text-white rounded-t-2xl rounded-bl-2xl px-2 flex flex-col">
              <p>Hi. What’s up?</p>
              <p className="text-xs mt-[-20px] self-end mb-0">20/09/14 13:09</p>
            </div>
            <div class="self-start w-[200px] bg-[#E9E9E9] rounded-t-2xl rounded-bl-2xl px-2 flex flex-col">
              <p>Hi. I’m doing great.How about u?</p>
              <p className="text-xs mt-[-20px] self-end mb-0">20/09/14 13:09</p>
            </div>
            <div class="self-end w-[200px] bg-[#9F0000] text-white rounded-t-2xl rounded-bl-2xl px-2 flex flex-col">
              <p>I’m also fine.Can we hang out today?</p>
              <p className="text-xs mt-[-20px] self-end mb-0">20/09/14 13:09</p>
            </div>
            <div class="self-start w-[200px] bg-[#E9E9E9] rounded-t-2xl rounded-bl-2xl px-2 flex flex-col">
              <p>Great idea. Let’s meet today.</p>
              <p className="text-xs mt-[-20px] self-end mb-0">20/09/14 13:09</p>
            </div>
            <div class="self-end w-[200px] bg-[#9F0000] text-white rounded-t-2xl rounded-bl-2xl px-2 flex flex-col">
              <p>I’m also fine.Can we hang out today?</p>
              <p className="text-xs mt-[-20px] self-end mb-0">20/09/14 13:09</p>
            </div>
            <div class="self-start w-[200px] bg-[#E9E9E9] rounded-t-2xl rounded-bl-2xl px-2 flex flex-col">
              <p>Great idea. Let’s meet today.</p>
              <p className="text-xs mt-[-20px] self-end mb-0">20/09/14 13:09</p>
            </div>
            <div class="self-end w-[200px] bg-[#9F0000] text-white rounded-t-2xl rounded-bl-2xl px-2 flex flex-col">
              <p>I’m also fine.Can we hang out today?</p>
              <p className="text-xs mt-[-20px] self-end mb-0">20/09/14 13:09</p>
            </div>
            <div class="self-start w-[200px] bg-[#E9E9E9] rounded-t-2xl rounded-bl-2xl px-2 flex flex-col">
              <p>Great idea. Let’s meet today.</p>
              <p className="text-xs mt-[-20px] self-end mb-0">20/09/14 13:09</p>
            </div>
            <div class="self-end w-[200px] bg-[#9F0000] text-white rounded-t-2xl rounded-bl-2xl px-2 flex flex-col">
              <p>I’m also fine.Can we hang out today?</p>
              <p className="text-xs mt-[-20px] self-end mb-0">20/09/14 13:09</p>
            </div>
            <div class="self-start w-[200px] bg-[#E9E9E9] rounded-t-2xl rounded-bl-2xl px-2 flex flex-col">
              <p>Great idea. Let’s meet today.</p>
              <p className="text-xs mt-[-20px] self-end mb-0">20/09/14 13:09</p>
            </div>
          </div>
        </div>
      </Box>
      <Box mt={2} sx={{
        height: '90px',
        background: '#F7F7F7',
        position: 'fixed',
        bottom: '0',
        width: '100%'
      }}>
        <Box sx={{
          display: 'flex',
          padding: '20px 10px',
          alignItems: 'center',
        }}>
          <Box mr={2}>
            <Box>
              { Add }
            </Box>
          </Box>
          <Box mr={4} sx={{ width: '100%' }}>
            <ChatField name="chat" type="text" placeholder="Message"/>
          </Box>
          <Box>
            { Send }
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ChatsPage;
