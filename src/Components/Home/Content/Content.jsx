import { Grid } from '@mui/material';
import React from 'react';
import ProductList from '../../Product/ProductList/ProductList';
import Mainpage from '../Mainpage';

const Content = () => {
    return (
        <div>
            <Mainpage />
            <Grid item md={12}>
                <ProductList/>
            </Grid>
        </div>
    );
};

export default Content;

