import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsContextsProvider from './Contexts/ProductsContexts';
import MyNavbar from './Components/Header/MyNavbar';
import Home from './Components/Home/Home';
import AddProduct from './Components/Admin/AddProduct/AddProduct';


const MyRoutes = () => {
    return (
        <ProductsContextsProvider>
            <BrowserRouter>
                <MyNavbar/>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path ='/add' element={<AddProduct />}/>
                </Routes>
            </BrowserRouter>
        </ProductsContextsProvider>
    );
};

export default MyRoutes;