import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ProductCard.css'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { IconButton, createTheme, ThemeProvider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { productContext } from '../../../Contexts/ProductsContexts';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function ProductCard({item}) { 
    const { deleteProduct, addProductInCart, checkProductInCart, addProductInFavorites, checkProductInFavorites, useAuth } = React.useContext(productContext)

    const customTheme = createTheme({
        palette: {
          secondary: {
            main: "#1e2328",
            contrastText: "#ffff"
          },
          warning: {
            main: "#f5b301",
            contrastText: "#3b3f46"
    
          }
        }
      });

      const currentUser = useAuth()

    
    let icons = (
        <CardActions disableSpacing>

            {currentUser?.email === 'sinatra@admin.com' ? (
            <Link to={`/edit/${item.id}`}>
                <IconButton>
                    <EditIcon/>
                </IconButton>
            </Link>) : (null)}

            {currentUser?.email === 'sinatra@admin.com' ? (
            <IconButton onClick={() => deleteProduct(item.id)}>
                <DeleteIcon/>
            </IconButton>) 
            : (null)}
            
            {currentUser? (
            <IconButton 
                aria-label='share' 
                onClick={() => addProductInFavorites(item)} 
                color={checkProductInFavorites(item.id) ? 'warning': 'secondary'}>
                <FavoriteIcon/>
            </IconButton>
            ) : (null)}
            {currentUser? (
            <IconButton 
                aria-label='share' 
                onClick={() => addProductInCart(item)} 
                color={checkProductInCart(item.id) ? 'warning': 'secondary'}>
                <ShoppingCartIcon/>
            </IconButton>
            ) : (null)}
        </CardActions>
    )
  return (
    <ThemeProvider theme={customTheme}>
        <Card sx={{ maxWidth: 420 }}>
            <Link to={`/detail/${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div" sx={{ fontWeight: 'bold'}}>
                    {item.artist}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.year}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    alt="item image"
                    height="300"
                    image={item.image}
                    className='cardImg'
                />
            </Link>

        <CardContent>
            <Typography size="small">$ {item.price}</Typography>
        </CardContent>
        {icons}
        </Card>
    </ThemeProvider>
  );
}
