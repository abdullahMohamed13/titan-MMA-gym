// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import Locales from './Locales'
// import { useNavigate, Link } from 'react-router-dom';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Avatar from '@mui/material/Avatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';

// const pages = ['Classes', 'Coaches', 'Students', 'Products', 'Events'];
// const settings = ['Profile', 'Logout'];

// function ResponsiveAppBar() {
//   const navigate = useNavigate();

//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl" sx={{backgroundColor: 'primary.main', padding: '8px 0'}}>
//         <Toolbar disableGutters>
//           <Link to={'/'}>
//             <img src='/images/brand-logo.png' className='hidden sm:flex' height={50} width={50} />
//           </Link>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               {pages.map((page, index) => (
//                 <MenuItem key={index} onClick={() => {
//                   handleCloseNavMenu
//                   navigate(`/${page.toLowerCase()}`);
//                   }}>
//                   <Typography sx={{ textAlign: 'center' }}>
//                     {page}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page, key) => (
//               <Button
//                 key={key}
//                 onClick={() => {
//                   navigate(`/${page.toLowerCase()}`);
//                   handleCloseNavMenu();
//                 }}
//                 sx={{ my: 2, color: 'white', display: 'block', fontSize: '21px', fontWeight: 'bold' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//             <img src='/images/brand-logo.png' className='flex sm:hidden' height={50} width={50}/>
//           <Box sx={{ flexGrow: 0, display: 'flex', gap: '10px' }}>
//             {/* <Locales /> */}
//           <>
//             <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
//               <Tooltip title="Account settings">
//                 <IconButton
//                   onClick={handleClick}
//                   size="small"
//                   sx={{ ml: 2 }}
//                   aria-controls={open ? 'account-menu' : undefined}
//                   aria-haspopup="true"
//                   aria-expanded={open ? 'true' : undefined}
//                 >
//                   <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
//                 </IconButton>
//               </Tooltip>
//             </Box>
//             <Menu
//               anchorEl={anchorEl}
//               id="account-menu"
//               open={open}
//               onClose={handleClose}
//               onClick={handleClose}
//               slotProps={{
//                 paper: {
//                   elevation: 0,
//                   sx: {
//                     overflow: 'visible',
//                     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//                     mt: 1.5,
//                     '& .MuiAvatar-root': {
//                       width: 32,
//                       height: 32,
//                       ml: -0.5,
//                       mr: 1,
//                     },
//                     '&::before': {
//                       content: '""',
//                       display: 'block',
//                       position: 'absolute',
//                       top: 0,
//                       right: 14,
//                       width: 10,
//                       height: 10,
//                       bgcolor: 'background.paper',
//                       transform: 'translateY(-50%) rotate(45deg)',
//                       zIndex: 0,
//                     },
//                   },
//                 },
//               }}
//               transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//               anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//             >
//               <MenuItem onClick={handleClose}>
//                 <Avatar /> Profile
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <Avatar /> My account
//               </MenuItem>
//               <Divider />
//               <MenuItem onClick={handleClose}>
//                 <ListItemIcon>
//                   <PersonAdd fontSize="small" />
//                 </ListItemIcon>
//                 Add another account
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <ListItemIcon>
//                   <Settings fontSize="small" />
//                 </ListItemIcon>
//                 Settings
//               </MenuItem>
//               <MenuItem onClick={handleClose}>
//                 <ListItemIcon>
//                   <Logout fontSize="small" />
//                 </ListItemIcon>
//                 Logout
//               </MenuItem>
//             </Menu>
//           </>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;
