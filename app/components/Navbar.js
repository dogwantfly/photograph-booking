'use client'

import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { styled, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import logo from "@images/logo.svg";

const pages = ['瀏覽攝影師', '登入'];

const drawerWidth = 318;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));


function Navbar() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
  const matchesSm = useMediaQuery(theme.breakpoints.up('sm'));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const getImgWidth = () => {
    if (matchesMd) {
      return 236;
    } else if (matchesSm) {
      return 150;
    } else {
      return 104;
    }
  };

  return (
    <AppBar
      position="relative"
      sx={{
        py: '1.5rem',
        boxShadow: 0,
        zIndex: 999
      }}
      style={{
        background: 'linear-gradient(#f7f7f7, #f7f7f7, #f7f7f7, #f7f7f700)'
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{
          px: {
            sm: '4.5rem'
          },
        }}
      >
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 'auto',
            }}
          >
            <Image 
              src={logo}
              width={getImgWidth()}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
              alt='logo'
            />
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerOpen}
            >
              <MenuIcon 
                sx={{
                  color: 'primary.main',
                  fontSize: {
                    xs: 24,
                    sm: 40,
                  },
                }}
              />
            </IconButton>

            <Drawer
              sx={{
                position: 'fixed',
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                },
              }}
              variant="persistent"
              anchor="right"
              open={open}
            >
              <DrawerHeader>
                <IconButton 
                  sx={{
                    ml: 'auto',
                  }} 
                  onClick={handleDrawerClose}
                >
                  <CloseIcon sx={{
                    color: 'primary.main',
                    fontSize: {
                    xs: 24,
                      sm: 40,
                    },
                  }} />
                </IconButton>
              </DrawerHeader>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  flexGrow: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <List>
                  {pages.map((text, index) => (
                    <ListItem 
                      key={text}
                      disablePadding
                      
                    >
                      <ListItemButton
                        sx={{
                          pl: 3,
                          color: 'secondary',
                          
                        }}
                      >
                        <ListItemText 
                          primary={text}
                          sx={{
                            color: 'primary.main',
                            '& .MuiTypography-root': {
                              fontWeight: 'bold',
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                
                <Button
                  // onClick={handleCloseNavMenu}
                  sx={{
                    color: 'primary',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: '0.75rem',
                    pl: '1rem',
                    pr: '1rem',
                    mx: '1.5rem',
                    mb: '2rem',
                    border: 1,
                    borderRadius: '0.75rem'
                  }}
                >
                  免費註冊
                  <ArrowRightAltIcon
                    color='primary'
                    sx={{
                      fontSize: 24,
                    }}
                  />
                </Button>
              </Box>
              
            </Drawer>
          </Box>

          {/* desktop menu */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{
                  color: 'primary',
                  display: 'block',
                  mr: '1rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                {page}
              </Button>
            ))}

            <Button
              // onClick={handleCloseNavMenu}
              sx={{
                color: 'primary',
                display: 'flex',
                alignItems: 'center',
                p: '0.5rem',
                pl: '1rem',
                fontWeight: 'bold',
                border: 1,
                borderRadius: '6.25rem'
              }}
            >
              免費註冊
              <ChevronRightIcon
                color='primary'
                sx={{
                  fontSize: '1.25rem'
                }}
              />
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
