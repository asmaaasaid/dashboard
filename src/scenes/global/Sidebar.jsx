import Topbar from "./Topbar";
import { Link } from 'react-router-dom';
 import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
 import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
 import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
 import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
 import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
 import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
 import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
 import PieChartOutLineOutlinedIcon from '@mui/icons-material/PieChartOutLineOutlined';
 import TimeLineOutlinedIcon from '@mui/icons-material/TimeLineOutlined';
 import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
 import MapOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { tokens } from "../../theme";

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { colors } from "@mui/material";


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}
      sx={{
    "& .MuiToolbar-root": {
      backgroundColor:
        theme.palette.mode === "dark"
          ? colors.primary[400]
          : theme.palette.background.default,
    }
  }}
    

      >
        <Toolbar>
          <Link to='/'> <Typography textTransform='capitalize' variant="h5" fontWeight='bold' sx={{color:colors.gray[200] , mr:'15px'}}>dashboard</Typography> </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Topbar/>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" 
      open={open}
      sx={{
           "& .MuiDrawer-paper": {
             backgroundColor:
               theme.palette.mode === "dark"
                 ? colors.primary[400]
                 : theme.palette.background.default,
           },
         }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography sx={{ m:1  , textTransform: "capitalize" }}  variant="h6">
          Data
        </Typography>
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon sx={{color:'whitesmoke'}}>
                <PeopleOutlinedIcon />
              </ListItemIcon>
              
              <Link to='/team'> <ListItemText primary="Manage Team" /> </Link>
            </ListItemButton>
            
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon sx={{color:'whitesmoke'}}>
                <ContactsOutlinedIcon />
              </ListItemIcon>
              <Link to='/contacts'><ListItemText primary="Contacts Information" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon sx={{color:'whitesmoke'}}>
                <ReceiptOutlinedIcon />
              </ListItemIcon>
              <Link to='/invoices'><ListItemText primary="Invoices Balance" /></Link>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
        
        <Typography sx={{ m:1, textTransform: "capitalize" }} variant="h6">
          Pages
        </Typography>
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon sx={{color:'whitesmoke'}}>
                <PersonOutlinedIcon />
              </ListItemIcon>
              <Link to='/form'><ListItemText primary="Profile Form" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon sx={{color:'whitesmoke'}}>
                <CalendarTodayOutlinedIcon />
              </ListItemIcon>
              <Link to='/calendar'> <ListItemText primary="Calendar" /> </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon sx={{color:'whitesmoke'}}>
                <HelpOutlinedIcon />
              </ListItemIcon>
              
              <Link to='/faq'> <ListItemText primary="FAQ Page" /> </Link>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider/>

        <Typography sx={{ m:1, textTransform: "capitalize"}} variant="h6">
          Charts
        </Typography>
        <List>
          
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon sx={{color:'whitesmoke'}}>
                <BarChartOutlinedIcon />
              </ListItemIcon>
              <Link to='/bar'> <ListItemText primary="Bar Chart" /> </Link>
              
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon sx={{color:'whitesmoke'}}>
                <PieChartOutLineOutlinedIcon />
              </ListItemIcon>
              <Link to='/pie'> <ListItemText primary="Pie Chart" /> </Link>
              
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon sx={{color:'whitesmoke'}}>
                <TimeLineOutlinedIcon />
              </ListItemIcon>
              <Link to='/line'> <ListItemText primary="Line Chart" /> </Link>
              
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon sx={{color:'whitesmoke'}}>
                <MapOutlinedIcon />
              </ListItemIcon>
              <Link to='/geography'> <ListItemText primary="Geography Chart" /> </Link>
              
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
      </Box> */}
    </Box>
  );
}
