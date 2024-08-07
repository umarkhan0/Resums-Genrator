import Logo from '../images/logo-resume-nerd.svg'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
const pages = ['Resums', <NavLink className=" no-underline text-[#000]" to={"/contect"}>Contect us </NavLink> , <NavLink to={"../login"} className=" no-underline text-[#000]"> Sign In</NavLink>, <NavLink to={"../intro"} className=' bg-[#008d5f] px-5 py-3 rounded-md no-underline text-white'>Create Resume</NavLink>];
const logOutPages = ['Resums', <NavLink className=" no-underline text-[#000]" to={"/contect"}>Contect us </NavLink>, <NavLink to={"../login"} className=" no-underline text-[#000]  text-center p-1">Profile </NavLink>, <NavLink to={"../intro"} className=' bg-[#008d5f] px-5 py-3 rounded-md no-underline text-white'>Create Resume</NavLink>];

function ResponsiveAppBar(position1) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  let SignTrueFalse = localStorage.getItem("Sign");
  console.log(!SignTrueFalse);
  return (
    <AppBar position={position1.positionS} style={{
      backgroundColor: "#fff",
      height: "60px",
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {!SignTrueFalse ?
                pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography marginTop={"10px"} marginBottom={"10px"} textAlign="center">{page}


                    </Typography>
                  </MenuItem>
                ))
                :
                logOutPages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography marginTop={"10px"} marginBottom={"10px"} textAlign="center">{page}


                    </Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>
          <Typography
            variant="image"
          >
            <img className='h-8' src={Logo} />
          </Typography>
          <Box sx={{
            flexGrow: 1, display: { xs: 'none', md: 'flex' },
            justifyContent: "space-around",


          }}>
            {!SignTrueFalse ? pages.map((page) => (
              <Button style={{
                color: "#000",
                fontWeight: "bold",
                fontSize: "14px"
              }}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }
                }
              >
                {page}

              </Button>
            ))
              :
              logOutPages.map((page) => (
                <Button style={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }
                  }
                >
                  {page}

                </Button>
              ))

            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;