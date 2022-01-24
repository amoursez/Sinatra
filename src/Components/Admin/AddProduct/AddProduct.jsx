import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, IconButton, TextField } from '@mui/material';
import { productContext } from '../../../Contexts/ProductsContexts';
import { Link, useNavigate } from 'react-router-dom';

export default function AddProduct() {
    const navigate = useNavigate()
    const [values, setValues] = React.useState({
        title: '',
        image: '',
        price: '',
        type: '',
        description: ''
    })

    const { addProduct } = React.useContext(productContext)

    const handleInp = (e) => {
        let obj = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        if(!values.image) values.image = 'https://content.onliner.by/news/1100x5616/472baa6904f365c4bae96d6b77c13010.jpeg'
        addProduct({...values, price: +values.price})
        navigate('/')
    }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: '40px auto',
          maxWidth: 1000,
          height: 'auto',
          p: '10px'
        },
      }}
    >
      <Paper elevation={3}>
        <h1 style={{textAlign: 'center'}}>Add Product</h1>
        <div style={{display: 'flex', justofyContent:'spase-around', color: 'black'}}>
            <div>
                <img src={values.image ? values.image : 'https://content.onliner.by/news/1100x5616/472baa6904f365c4bae96d6b77c13010.jpeg'} alt="product image" style={{width: '300px'}}/>
            </div>
            <div 
                style={{
                    width: '450px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <form noValidate autoComplete='off'
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <TextField name='name' onChange={handleInp} value={values.name} variant='outlined' label='Name' style={{padding: '10px'}}/>
                        <TextField name='autor' onChange={handleInp} value={values.autor} variant='outlined' label='Autor' style={{padding: '10px'}}/>
                        <TextField name='image' onChange={handleInp} value={values.image} variant='outlined' label='Image' style={{padding: '10px'}}/>
                        <TextField name='description' onChange={handleInp} value={values.description} variant='outlined' label='Description' style={{padding: '10px'}}/>
                        <TextField name='price' onChange={handleInp} value={values.price} variant='outlined' label='Price' style={{padding: '10px'}}/>
                    </form>
                    <Link to='/'>
                        <Button onClick={handleSave} variant='contained' color='success'>Add</Button>
                    </Link>
            </div>
        </div>
      </Paper>      
    </Box>
  );
}
