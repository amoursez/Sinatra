import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../../Contexts/ProductsContexts';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const ProductDetail = () => {
    const { id } = useParams()
    const { detail, getDetail } = useContext(productContext)

    useEffect(() => {
        getDetail(id)
    }, [id])

    return (
           <Paper elevation={0} variant="outlined">
                <Typography variant='h2' style={{textAlign: 'center'}}>Description</Typography>
                {
                    detail ? (
                        <div style={{margin: '20px 180px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            <div>
                                <img width='250px' src={detail.image} alt={detail.name} />
                            </div>
                            <div style={{
                                width:'450px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'center'
                            }}
                            >
                                <Typography variant='h3'>{detail.name}</Typography>
                                <Typography variant='h4'>{detail.artist}</Typography>
                                <Typography variant='subtitle1'>{detail.year}</Typography>
                                <Typography variant='h4'>$ {detail.price}</Typography>
                            </div>
                        </div>
                            <div style={{marginTop: '20px'}}>
                                <Typography variant='p'>{detail.description}</Typography>
                                <br />
                                <Typography variant='p'>{detail.tracklist}</Typography>
                            </div>
                        </div>

                    ) : (<h1>loading...</h1>)
                }
            </Paper> 
    );
};

export default ProductDetail;