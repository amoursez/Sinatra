import { Grid } from '@mui/material';
import React from 'react';
import ProductList from '../../Product/ProductList/ProductList';

const Content = () => {
    return (
        <div>
            <Grid item md={12}>
                <ProductList/>
            </Grid>
        </div>
    );
};

export default Content;

