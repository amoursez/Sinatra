import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, IconButton, TextField } from '@mui/material';
import { productContext } from '../../../Contexts/ProductsContexts';
import { Link, useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

export default function EditProduct() {
    const { edit, editProduct, saveEditedProduct } = React.useContext(productContext)

    const { id } = useParams()

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

    React.useEffect(() => {
        editProduct(id)
    }, [id])

    React.useEffect(() => {
        if(edit) {
            setValues(edit)
        }
    }, [edit])


    const handleEditInp = (e) => {
        let obj = {
            ...values,
            [e.target.name]: e.target.value
        }
        setValues(obj)
    }

    const handleSave = () => {
        saveEditedProduct(values)
    }

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
        },
        
      })

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
            <h1 style={{textAlign: 'center'}}>Update Product</h1>
            <div style={{display: 'flex', justifyContent:'spase-around', color: 'black'}}>
                <div>
                    <img width='300' src={values.image} alt="product image" />
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
                            <TextField name='name' multiline onChange={handleEditInp} value={values.name} variant='outlined' label='Name' style={{padding: '10px', width: '20em'}} color="secondary"/>
                            <TextField name='artist' multiline onChange={handleEditInp} value={values.artist} variant='outlined' label='Artist' style={{padding: '10px', width: '20em'}} color="secondary"/>
                            <TextField name='year' onChange={handleEditInp} value={values.year} variant='outlined' label='Year' style={{padding: '10px', width: '20em'}} color="secondary"/>
                            <TextField name='image' multiline onChange={handleEditInp} value={values.image} variant='outlined' label='Image' style={{padding: '10px', width: '20em'}} color="secondary"/>
                            <TextField name='price' onChange={handleEditInp} value={values.price} variant='outlined' label='Price' style={{padding: '10px', width: '20em'}} color="secondary"/>
                            <TextField name='description' multiline onChange={handleEditInp} value={values.description} variant='outlined' label='Description' style={{padding: '10px', width: '20em'}} color="secondary"/>
                            <TextField name='tracklist' multiline onChange={handleEditInp} value={values.tracklist} variant='outlined' label='Tracklist' style={{padding: '10px', width: '20em'}} color="secondary"/>
                            <TextField name='genre' multiline onChange={handleEditInp} value={values.genre} variant='outlined' label='Genre' style={{padding: '10px', width: '20em'}} color="secondary"/>
                        </form>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <Button onClick={handleSave} variant='contained' color='warning'>Save</Button>                    
                            </Link>
                </div>
            </div>
        </Paper>      
        </Box>
    </ThemeProvider>
  )
}
