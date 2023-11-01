import React from 'react';
import { Avatar, Box, Chip, Typography } from '@mui/material';
import BackIcon from '../Back';
import FormInputField from '../FormInput/FormInputField';
import PropTypes from 'prop-types';
import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { Popper as BasePopper } from '@mui/base/Popper';
import { styled } from '@mui/system';
import { gray } from '../../assets/js/customStyles';
import { red } from '@mui/material/colors';
import { KeyboardArrowDown } from '@mui/icons-material';
import DateField from '../FormInput/DateField';
import TextAreaField from '../FormInput/TextAreaField';
import UrlField from '../FormInput/UrlField';
import Football from '../../assets/img/football.png';
import Language from '../../assets/img/language.png';
import Nature from '../../assets/img/nature.png';
import Photography from '../../assets/img/photography.png';
import Writing from '../../assets/img/writing.png';
import Button from '../Button';

const UploadImage = (
  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="39" viewBox="0 0 52 39" fill="none">
    <path d="M19.5063 11.375C19.5063 12.6679 18.9927 13.9079 18.0785 14.8221C17.1643 15.7364 15.9243 16.25 14.6313 16.25C13.3384 16.25 12.0984 15.7364 11.1842 14.8221C10.27 13.9079 9.75635 12.6679 9.75635 11.375C9.75635 10.0821 10.27 8.84209 11.1842 7.92785C12.0984 7.01361 13.3384 6.5 14.6313 6.5C15.9243 6.5 17.1643 7.01361 18.0785 7.92785C18.9927 8.84209 19.5063 10.0821 19.5063 11.375Z" fill="white"/>
    <path d="M4.875 0C3.58207 0 2.34209 0.513615 1.42785 1.42785C0.513615 2.34209 0 3.58207 0 4.875L0 34.125C0 35.4179 0.513615 36.6579 1.42785 37.5721C2.34209 38.4864 3.58207 39 4.875 39H47.125C48.4179 39 49.6579 38.4864 50.5721 37.5721C51.4864 36.6579 52 35.4179 52 34.125V4.875C52 3.58207 51.4864 2.34209 50.5721 1.42785C49.6579 0.513615 48.4179 0 47.125 0H4.875ZM47.125 3.25C47.556 3.25 47.9693 3.42121 48.274 3.72595C48.5788 4.0307 48.75 4.44402 48.75 4.875V24.375L36.4813 18.0473C36.1765 17.8946 35.8314 17.8416 35.4949 17.8959C35.1583 17.9501 34.8474 18.1088 34.606 18.3495L22.5485 30.407L13.9035 24.648C13.5914 24.4402 13.217 24.3467 12.8438 24.3835C12.4706 24.4202 12.1216 24.5848 11.856 24.8495L3.2565 32.5V34.255C3.25262 34.2118 3.25045 34.1684 3.25 34.125V4.875C3.25 4.44402 3.4212 4.0307 3.72595 3.72595C4.0307 3.42121 4.44402 3.25 4.875 3.25H47.125Z" fill="white"/>
  </svg>
);

const FacebookIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12.073C24 5.40577 18.6269 0 12 0C5.37309 0 0 5.40577 0 12.073C0 18.0984 4.38761 23.0933 10.1252 24V15.5636H7.07748V12.073H10.1252V9.41251C10.1252 6.38703 11.9173 4.7147 14.6578 4.7147C15.9707 4.7147 17.3444 4.95069 17.3444 4.95069V7.92186H15.8306C14.3406 7.92186 13.8748 8.85225 13.8748 9.80808V12.0729H17.2026L16.671 15.5636H13.8747V23.9999C19.6123 23.0949 23.9999 18.1 23.9999 12.0729L24 12.073Z" fill="#1977F3"/>
  </svg>
)

const InstagramIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>
)

const Select = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: Listbox,
    popper: Popper,
    ...props.slots,
  };

  return <BaseSelect {...props} ref={ref} slots={slots} />;
});

Select.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    listbox: PropTypes.elementType,
    popper: PropTypes.func,
    root: PropTypes.elementType,
  }),
};

const ButtonDesign = React.forwardRef(function Button(props, ref) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      <KeyboardArrowDown />
    </button>
  );
});

ButtonDesign.propTypes = {
  children: PropTypes.node,
  ownerState: PropTypes.object.isRequired,
};

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledButton = styled(ButtonDesign, { shouldForwardProp: () => true })(
  ({ theme }) => `
  font-family: Dm sans;
  font-size: 16px;
  box-sizing: border-box;
  min-width: 320px;
  padding: 12px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.5;
  position: relative;
  background: #ffffff;
  border: 1px solid ${gray[500]};
  color: ${gray[500]};
  box-shadow: 0px 2px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
  };

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${red[500]};
  }

  &.${selectClasses.focusVisible} {
    outline: 0;
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `,
);

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: Dm sans;
  font-size: 16px;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  max-height: 400px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${gray[500]};
  box-shadow: 0px 2px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
  };
  `,
);

const Option = styled(BaseOption)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const Popper = styled(BasePopper)`
  z-index: 1;
`;


const ProfileSettingsPage = () => {
  return (
    <div>
      <Box mt={2}>
        <Box sx={{display: 'flex', alignItems: 'center'}}> 
          <Box>
            <BackIcon navigation="/dashboard" />
          </Box>
          <Typography variant="p" fontSize={24} fontFamily="Dm Sans" fontWeight="bold">
            Profile Settings
          </Typography>
        </Box>
      </Box>
      <Box mt={2} pl={2} pr={2}>
        <Box sx={{
          display: 'flex',
        }}>
          <Box mr={1}>  
            <div class="flex relative items-center justify-center w-[210px]">
              <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[219px] rounded-xl cursor-pointer bg-[#C4C4C469] hover:bg-gray-100">
                <div class="flex justify-center ">
                  { UploadImage }
                </div>
                <div className='flex'>
                  <p className="text-sm text-center absolute bg-white rounded-full self-end bottom-0 right-1 w-[25px] h-[25px]">
                    1
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div> 
          </Box>
          <Box>  
            <div className="flex relative items-center justify-center w-[103px]">
              <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-[103px] rounded-xl cursor-pointer bg-[#C4C4C469] hover:bg-gray-100">
                <div class="flex justify-center ">
                  { UploadImage }
                </div>
                <div className='flex'>
                  <p className="text-sm text-center absolute bg-white rounded-full self-end bottom-0 right-1 w-[25px] h-[25px]">
                    2
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
            <div className="flex relative mt-3 items-center justify-center w-[103px]">
              <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-[103px] rounded-xl cursor-pointer bg-[#C4C4C469] hover:bg-gray-100">
                <div class="flex justify-center ">
                  { UploadImage }
                </div>
                <div className='flex'>
                  <p className="text-sm text-center absolute bg-white rounded-full self-end bottom-0 right-1 w-[25px] h-[25px]">
                    3
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </Box>
        </Box>
        <Box mt={2}>
          <Box sx={{
            display: 'flex'
          }}>  
            <div className="flex relative mr-3 items-center justify-center w-[103px]">
              <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-[103px] rounded-xl cursor-pointer bg-[#C4C4C469] hover:bg-gray-100">
                <div class="flex justify-center ">
                  { UploadImage }
                </div>
                <div className='flex'>
                  <p className="text-sm text-center absolute bg-white rounded-full self-end bottom-0 right-1 w-[25px] h-[25px]">
                    2
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
            <div className="flex relative mr-3 items-center justify-center w-[103px]">
              <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-[103px] rounded-xl cursor-pointer bg-[#C4C4C469] hover:bg-gray-100">
                <div class="flex justify-center ">
                  { UploadImage }
                </div>
                <div className='flex'>
                  <p className="text-sm text-center absolute bg-white rounded-full self-end bottom-0 right-1 w-[25px] h-[25px]">
                    3
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <div className="flex relative mr-2 items-center justify-center w-[103px]">
              <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-[103px] rounded-xl cursor-pointer bg-[#C4C4C469] hover:bg-gray-100">
                <div class="flex justify-center ">
                  { UploadImage }
                </div>
                <div className='flex'>
                  <p className="text-sm text-center absolute bg-white rounded-full self-end bottom-0 right-1 w-[25px] h-[25px]">
                    4
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </Box>
        </Box>
        <Box mt={2} mb={2}>
          <Typography variant='p' sx={{color: 'rgba(41, 37, 46, 0.42)', fontSize: '16px', textTransform: 'uppercase'}}>
            general info
          </Typography>
          <Box mt={1}>
            <FormInputField placeholder="Name" type="text" />
          </Box>
          <Box mt={1}>
            <Select defaultValue={10}>
              <Option value={10}>Gender</Option>
              <Option value={20}>Male</Option>
              <Option value={30}>Female</Option>
            </Select>
          </Box>
          <Box mt={1}>
            <DateField />
          </Box>
          <Box mt={1}>
            <Select defaultValue={10}>
              <Option value={10}>Looking For</Option>
              <Option value={20}>Male</Option>
              <Option value={30}>Female</Option>
            </Select>
          </Box>
          <Box mt={1}>
            <Select defaultValue={10}>
              <Option value={10}>Here For</Option>
              <Option value={20}>Dating</Option>
              <Option value={30}>Friendship</Option>
            </Select>
          </Box>
          <Box mt={1}>
            <TextAreaField placeholder="Bio" type="text" />
          </Box>
          <Box mt={1}>
            <UrlField placeholder="URL here" Icon={FacebookIcon}/>
          </Box>
          <Box mt={1}>
            <UrlField placeholder="URL here" Icon={InstagramIcon}/>
          </Box>
          <Box mt={2}>
            <Typography variant='p' sx={{color: 'rgba(41, 37, 46, 0.42)', fontSize: '16px', textTransform: 'uppercase'}}>
              interests
            </Typography>
          
            <Box mt={1}>
              <FormInputField placeholder="Search your interests..." type="text" />
            </Box>
            <Box>
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
          </Box>
          <Box mt={3}>
            <Button size="320px" label="Save" type="submit" />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default ProfileSettingsPage;
