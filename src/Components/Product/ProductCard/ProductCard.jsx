import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './ProductCard.css'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { productContext } from '../../../Contexts/ProductsContexts';

export default function ProductCard({item}) { 
    const { deleteProduct, addProductInCart, checkProductInCart } = React.useContext(productContext)
    
    let icons = (
        <CardActions disableSpacing>
            <Link to={`/edit/${item.id}`}>
                <IconButton>
                    <EditIcon/>
                </IconButton>
            </Link>
            <IconButton onClick={() => deleteProduct(item.id)}>
                <DeleteIcon/>
            </IconButton>
            <IconButton 
                aria-label='share' 
                onClick={() => addProductInCart(item)} 
                color={checkProductInCart(item.id) ? 'secondary' : 'inherit'}>
                <ShoppingCartIcon/>
            </IconButton>
        </CardActions>
    )
  return (
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
  );
}
