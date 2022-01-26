import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, createTheme, IconButton, TextField, ThemeProvider } from '@mui/material';
import { productContext } from '../../../Contexts/ProductsContexts';
import { Link, useNavigate } from 'react-router-dom';

export default function AddProduct() {
    const navigate = useNavigate()
    const [values, setValues] = React.useState({
        name: '',
        artist: '',
        year: '',
        image: '',
        price: '',
        description: '',
        tracklist: '',
        genre: ''
    })

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
    <ThemeProvider theme={customTheme}>
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
          <div style={{display: 'flex', justifyContent:'spase-around', color: 'black'}}>
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
                          <TextField name='name' onChange={handleInp} value={values.name} multiline variant='outlined' label='Name' style={{padding: '10px', width: '20em'}} color="secondary"/>
                          <TextField name='artist' onChange={handleInp} value={values.artist} multiline variant='outlined' label='Artist' style={{padding: '10px', width: '20em'}} color="secondary"/>
                          <TextField name='year' onChange={handleInp} value={values.year} variant='outlined' label='Year' style={{padding: '10px', width: '20em'}} color="secondary"/>
                          <TextField name='image' onChange={handleInp} value={values.image} multiline variant='outlined' label='Image' style={{padding: '10px', width: '20em'}} color="secondary"/>
                          <TextField name='price' onChange={handleInp} value={values.price} variant='outlined' label='Price' style={{padding: '10px', width: '20em'}} color="secondary"/>
                          <TextField name='description' onChange={handleInp} value={values.description} multiline variant='outlined' label='Description' style={{padding: '10px', width: '20em'}} color="secondary"/>
                          <TextField name='tracklist' onChange={handleInp} value={values.tracklist} multiline variant='outlined' label='Tracklist' style={{padding: '10px', width: '20em'}} color="secondary"/>
                          <TextField name='genre' onChange={handleInp} value={values.genre} variant='outlined' label='Genre' style={{padding: '10px', width: '20em'}} color="secondary"/>
                      </form>
                      <Link to='/' style={{ textDecoration: 'none' }}>
                          <Button onClick={handleSave} variant='contained' color='warning'>Add</Button>
                      </Link>
              </div>
          </div>
        </Paper>      
      </Box>
    </ThemeProvider>
  );
}
