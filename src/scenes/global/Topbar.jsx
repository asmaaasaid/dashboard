import {Box , IconButton , useTheme } from '@mui/material';
import  InputBase  from '@mui/material/InputBase';
import { useContext } from 'react';
import { colorModeContext , tokens } from '../../theme';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colorModeContext);
  return (
    <Box display='flex' justifyContent='flex-end' width={'100%'} >
      {/* search bar */}
      {/* <Box backgroundColor={colors.primary[400]}  borderRadius='3px' display='flex' >
        <InputBase placeholder='search' sx={{ml:2 , flex:1}} />
        <IconButton type='button' sx={{p:1 }}>
          <SearchOutlinedIcon/>
        </IconButton>
      </Box> */}

      {/* icons */}
      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon/> : <LightModeOutlinedIcon/>}
          
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar