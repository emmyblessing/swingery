import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { Box, Paper } from '@mui/material';
import { red, gray } from '../../assets/js/customStyles';
import DashMain from '../DashMain';
import Profile from '../Profile';
import Love from '../Love';
import Favorite from '../Favorite';
import Messages from '../Messages';

const vectorOne = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
    <path d="M26.3409 2.87217L24.5444 2.10626V14.4566L27.8021 6.44187C28.3518 5.04682 27.7217 3.44661 26.3409 2.87217ZM0.198881 7.93267L6.84833 24.2767C7.04413 24.774 7.37812 25.202 7.80923 25.5082C8.24034 25.8144 8.74976 25.9853 9.27484 26C9.6234 26 9.98537 25.9316 10.3339 25.7812L20.2143 21.6097C21.2197 21.1857 21.8364 20.1736 21.8632 19.1615C21.8766 18.8059 21.8096 18.4093 21.6889 18.0537L14.9859 1.70963C14.7964 1.20907 14.4636 0.778305 14.0308 0.473384C13.598 0.168463 13.0853 0.0035119 12.5593 0C12.2108 0 11.8622 0.0820622 11.5271 0.205155L1.66015 4.37664C1.00427 4.65066 0.4819 5.17918 0.20788 5.84601C-0.0661405 6.51284 -0.0693774 7.2634 0.198881 7.93267ZM21.8498 2.7354C21.8498 2.00993 21.5673 1.31417 21.0645 0.801181C20.5617 0.288193 19.8797 0 19.1686 0H17.2247L21.8498 11.4066" fill="currentColor"/>
  </svg>
);

const vectorTwo = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 20 17" fill="none">
    <path d="M19.3762 2.39898C18.5386 0.779361 16.1258 -0.545784 13.3191 0.225745C11.9779 0.590742 10.8078 1.37349 9.99986 2.4461C9.19192 1.37349 8.02178 0.590742 6.68062 0.225745C3.86771 -0.534005 1.46111 0.779361 0.623483 2.39898C-0.55169 4.66645 -0.0641182 7.21662 2.0737 9.97881C3.74894 12.1403 6.14304 14.3312 9.61856 16.8755C9.72839 16.9562 9.86369 17 10.003 17C10.1423 17 10.2776 16.9562 10.3874 16.8755C13.8567 14.3371 16.257 12.1638 17.9323 9.97881C20.0638 7.21662 20.5514 4.66645 19.3762 2.39898Z" fill="currentColor"/>
  </svg>
);

const vectorThree = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 23 21" fill="none">
    <path d="M5.05475 20.9202C4.51436 21.1974 3.90119 20.7116 4.01038 20.0914L5.17234 13.4697L0.240307 8.77141C-0.220278 8.33182 0.0191142 7.52825 0.636494 7.44145L7.49347 6.46709L10.551 0.409486C10.8268 -0.136495 11.5729 -0.136495 11.8487 0.409486L14.9062 6.46709L21.7632 7.44145C22.3806 7.52825 22.62 8.33182 22.158 8.77141L17.2273 13.4697L18.3893 20.0914C18.4985 20.7116 17.8853 21.1974 17.3449 20.9202L11.1977 17.7619L5.05335 20.9202H5.05475Z" fill="currentColor"/>
  </svg>
);

const vectorFour = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H13C13.7956 0 14.5587 0.316071 15.1213 0.87868C15.6839 1.44129 16 2.20435 16 3V9C16 9.79565 15.6839 10.5587 15.1213 11.1213C14.5587 11.6839 13.7956 12 13 12H9.414L5.707 15.707C5.56715 15.8468 5.38898 15.942 5.19503 15.9806C5.00108 16.0192 4.80005 15.9993 4.61735 15.9237C4.43465 15.848 4.27848 15.7199 4.1686 15.5555C4.05871 15.391 4.00004 15.1978 4 15V12H3C2.20435 12 1.44129 11.6839 0.87868 11.1213C0.316071 10.5587 0 9.79565 0 9V3ZM20 7V13C20 14 19.4 16 17 16H16V19C16 19.333 15.8 20 15 20C14.797 20 14.632 19.957 14.5 19.887L10.613 16H7L10 13H13C14.333 13 17 12.2 17 9V4C18 4 20 4.6 20 7Z" fill="currentColor"/>
  </svg>
);

const vectorFive = (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 14 20" fill="none">
    <path d="M12.8333 5.88235C12.8333 4.25765 12.18 2.78706 11.1253 1.72353C10.0695 0.658824 8.61117 0 7 0C5.38883 0 3.9305 0.658824 2.87467 1.72353C1.82 2.78706 1.16667 4.25765 1.16667 5.88235C1.16667 7.50706 1.82 8.97765 2.87467 10.0412C3.9305 11.1059 5.38883 11.7647 7 11.7647C8.61117 11.7647 10.0695 11.1059 11.1253 10.0412C11.6677 9.4956 12.0977 8.84733 12.3909 8.13363C12.684 7.41992 12.8343 6.65484 12.8333 5.88235ZM0 17.6471C0 18.8235 2.625 20 7 20C11.1043 20 14 18.8235 14 17.6471C14 15.2941 11.2537 12.9412 7 12.9412C2.625 12.9412 0 15.2941 0 17.6471Z" fill="currentColor"/>
  </svg>
);

export default function DashboardPage() {
  return (
    <Tabs defaultValue={1}>
      <TabPanel value={1}>
        <Box>
          <DashMain />
        </Box>
      </TabPanel>
      <TabPanel value={2}>
        <Box>
          <Love />
        </Box>
      </TabPanel>
      <TabPanel value={3}>
        <Box>
          <Favorite />
        </Box>
      </TabPanel>
      <TabPanel value={4}>
        <Box>
          <Messages />
        </Box>
      </TabPanel>
      <TabPanel value={5}>
        <Box>
          <Profile />
        </Box>
      </TabPanel>
      
      <Paper sx={{ zIndex:'10', position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>  
        <TabsList>
          <Tab value={1}>{vectorOne}</Tab>
          <Tab value={2}>{vectorTwo}</Tab>
          <Tab value={3}>{vectorThree}</Tab>
          <Tab value={4}>{vectorFour}</Tab>
          <Tab value={5}>{vectorFive}</Tab>
        </TabsList>
      </Paper>
      
    </Tabs>
  );
}

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${gray[200]};
  background: white;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  display: flex;
  justify-content: center;

  &:hover {
    color: ${gray[200]};
  }

  &:focus {
    color: ${gray[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${red[500]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
  };
  `,
);