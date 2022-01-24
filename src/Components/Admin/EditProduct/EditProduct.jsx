import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, IconButton, TextField } from '@mui/material';
import { productContext } from '../../../Contexts/ProductsContexts';
import { Link, useParams } from 'react-router-dom';

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
        tracklist: ''
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
        <h1 style={{textAlign: 'center'}}>Update Product</h1>
        <div style={{display: 'flex', justofyContent:'spase-around', color: 'black'}}>
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
                        <TextField name='name' onChange={handleEditInp} value={values.name} variant='outlined' label='Name' style={{padding: '10px'}}/>
                        <TextField name='artist' onChange={handleEditInp} value={values.artist} variant='outlined' label='Artist' style={{padding: '10px'}}/>
                        <TextField name='year' onChange={handleEditInp} value={values.year} variant='outlined' label='Year' style={{padding: '10px'}}/>
                        <TextField name='image' onChange={handleEditInp} value={values.image} variant='outlined' label='Image' style={{padding: '10px'}}/>
                        <TextField name='price' onChange={handleEditInp} value={values.price} variant='outlined' label='Price' style={{padding: '10px'}}/>
                        <TextField name='description' onChange={handleEditInp} value={values.description} variant='outlined' label='Description' style={{padding: '10px'}}/>
                        <TextField name='tracklist' onChange={handleEditInp} value={values.tracklist} variant='outlined' label='Tracklist' style={{padding: '10px'}}/>
                    </form>
                        <Link to='/'>
                            <Button onClick={handleSave} variant='contained' color='success'>Save</Button>                    
                        </Link>
            </div>
        </div>
      </Paper>      
    </Box>
  );
}
