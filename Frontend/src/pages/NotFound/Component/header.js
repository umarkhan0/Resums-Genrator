import * as React from 'react';
import PropTypes from 'prop-types';
import {Divider , Typography , Toolbar , ListItemText , ListItemButton , List , ListItem , CssBaseline , Box , AppBar , Drawer , IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logoImage from "../../../images/logo-resume-nerd.svg";
import { NavLink } from 'react-router-dom';

const navItems = [<a className=' no-underline font-[800] font-[Raylway] hover:underline text-[#333]' href='mailto:umaraamir959@gmail.com'>E-MAIL US</a>, <span className=' font-[500] font-[Raylway] text-[#333]'>844-363-0076</span>, <span className=' font-[500] font-[Raylway] text-[#333]'>MON-FRI 9AM-8PM EST</span>, <NavLink to={"/login"} className=' no-underline font-[800] font-[Raylway] hover:underline text-[#333]'>SIGN IN</NavLink>];
const navLoginItems = [<a className=' no-underline font-[800] font-[Raylway] hover:underline text-[#333]' href='mailto:umaraamir959@gmail.com'>E-MAIL US</a>, <span className=' font-[500] font-[Raylway] text-[#333]'>844-363-0076</span>, <span className=' font-[500] font-[Raylway] text-[#333]'>MON-FRI 9AM-8PM EST</span>, <NavLink to={"/intro"} className=' no-underline font-[800] font-[Raylway] text-lg hover:underline text-[#333]'>Get Started</NavLink>];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    let getSign = localStorage.getItem("Sign")
    const drawer = ( 
        <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', p: 2 }}>

                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <Divider />
            <List>
                {!getSign ? navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))
                    : navLoginItems.map((item) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
            <CssBaseline />
            <AppBar component="nav" style={{ backgroundColor: "#f8f8f8" }}>
                <Toolbar>
                    <IconButton
                        color="#000"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, textAlign: { xs: 'right', sm: 'left' }, display: { sm: 'block' } }}
                    >
                        <div className='leading-4 block xl:w-36 sm:w-36 sm:text-center xl:text-center cursor-pointer'>
                            <Typography className='flex justify-end'>
                                <img className='h-[30px]' src={logoImage} alt='logo' />
                            </Typography>
                        </div>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {!getSign ? navItems.map((item) => (
                            <span className=' px-2' key={item} sx={{ color: '#000' }}>
                                {item}
                            </span>
                        ))
                            : navLoginItems.map((item) => (
                                <span className=' px-2' key={item} sx={{ color: '#000' }}>
                                    {item}
                                </span>
                            ))
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor="left" // Open drawer from the left side
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' }, // Full width
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
