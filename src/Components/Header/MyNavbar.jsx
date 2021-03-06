import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from "../Header/logo.png"
import { productContext } from '../../Contexts/ProductsContexts';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const customTheme = createTheme({
    palette: {
      secondary: {
        main: "#1e2328",
        contrastText: "#ffff"
      },
      warning: {
        main: "#f5b301",
        contrastText: "#3b3f46"

      },
      primary: {
        main: '#ffff',
        contrastText: "#3b3f46"
      }
    }
  });

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function MyNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const { cartLength, getProducts, useAuth, logout  } = React.useContext(productContext)
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchVal, setSearchVal] = React.useState(searchParams.get('q') ? searchParams.get('q') : '')

  const currentUser = useAuth()

  React.useEffect(() => {
      setSearchParams({
        'q': searchVal,
        '_limit': 3,
        "_page": 1
      })
  }, [searchVal])

  // console.log(searchVal)
  const handleValue = (e) => {
    // const search = new URLSearchParams(window.location.search)
    // search.set('q', e.target.value)
    setSearchVal(e.target.value)
    setSearchParams({
        'q': searchVal,
        '_limit': 3,
        "_page": 1
    })
    getProducts()
  }

  async function handleLogout(){
    try{
        await logout()
    } catch(error){
        console.log(error);
    }
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
    const renderMenu = (
    <Menu 
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
     
      <Link to='/login' style={{ textDecoration: 'none' }}>
          <MenuItem sx={{color: '#1e2328'}}>Login</MenuItem>
        </Link>
        <Link to='/register' style={{ textDecoration: 'none' }}>
          <MenuItem sx={{color: '#1e2328'}}>Register</MenuItem>
        </Link>
      </Menu>
      
  )

  

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <Link to='/products' style={{ textDecoration: 'none', color:'inherit' }} >
          <Button variant="text" color='inherit' className='menubar'>Products</Button>
          </Link>
      </MenuItem>
      <MenuItem>
          <Link to='/about' style={{ textDecoration: 'none', color:'Background' }}>
            <Button variant="text" color='inherit' className='menubar'>About Us</Button>
          </Link>
      </MenuItem>
      <MenuItem>
          <Link to='/contacts' style={{ textDecoration: 'none', color:'inherit' }}>
            <Button variant="text" color='inherit' className='menubar'>Contacts</Button>
          </Link>
      </MenuItem>
      <MenuItem>
      {currentUser ? (
          <Link to='/cart' style={{color: 'inherit', textDecoration: 'none'}}>
            <IconButton color='inherit' size="small">
                <Badge>
                    <ShoppingCartIcon/><p>Cart</p>
                </Badge> 
            </IconButton>

          </Link>
          ) : (null)}
      </MenuItem>
      <MenuItem>
      {currentUser ? (
          <Link to='/favorites' style={{color: 'inherit', textDecoration: 'none'}}>
            <IconButton aria-label="fav" color="inherit" size="small">
                <FavoriteIcon />
                <p>Favorite</p>
            </IconButton>
          </Link>
          ) : (null)}
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
      {currentUser? (
                <IconButton 
                
                aria-label='logout'
                color="inherit"
                 disabled={!currentUser} onClick={handleLogout} size="small">
                  <LogoutIcon/>
                  <p>Logout</p>
                </IconButton>) :
                (null)
            }
      </MenuItem>
    </Menu>
  );
  
  
  return (
    <ThemeProvider theme={customTheme}>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"secondary"}>
        <Toolbar>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/'>
                 <Box
        component="img"
        sx={{
          height: 80,
          width: 160,
        }}
        alt="lOGO"
        src={Logo}
      />
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ 'aria-label': 'search' }}
              value={searchVal}
              onChange={handleValue}
            />
          </Search>
          <Box sx={{ flexGrow: 1}} className='menubar'>
          <Link to='/products' style={{ textDecoration: 'none' }}>
          <Button variant="text" color='primary' className='menubar'>Products</Button>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <Button variant="text" color='primary' className='menubar'>About Us</Button>
          </Link>
          <Link to='/contacts' style={{ textDecoration: 'none' }}>
            <Button variant="text" color='primary' className='menubar'>Contacts</Button>
          </Link>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          

          {currentUser?.email === 'sinatra@admin.com' ? (
                <Link to='/add' style={{ textDecoration: 'none', marginRight: 8 }}>
                  <Button variant='contained' color={'warning'}>Add</Button>
                </Link>
          ) : (null)}

            {currentUser?.email}
            {currentUser? (
                <Button variant='success' disabled={!currentUser} onClick={handleLogout} className='menubar'>
                  <LogoutIcon/>
                </Button>) :
                (null)

            }

          
          {currentUser ? (
          <Link to='/cart' style={{color: 'white'}}>
            <IconButton color='inherit'>
                <Badge>
                    <ShoppingCartIcon/>
                </Badge> 
            </IconButton>
          </Link>
          ) : (null)}
          {currentUser ? (
          <Link to='/favorites' style={{color: 'white'}}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <FavoriteIcon /> 
            </IconButton>
          </Link>
          ) : (null)}

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {!currentUser ? 
            (<IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              >
              <AccountCircle />
            </IconButton>
            ) :
            (<IconButton
              disabled
              color="inherit"
              >
              <AccountCircle />
            </IconButton>
            )
          }
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </ThemeProvider>
  );
}
