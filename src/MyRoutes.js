import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsContextProvider from './Contexts/ProductsContexts';
import MyNavbar from './Components/Header/MyNavbar';
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home';
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import EditProduct from './Components/Admin/EditProduct/EditProduct';
import ProductDetail from './Components/Product/ProductDetail/ProductDetail';


const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
                <MyNavbar/>
                <Routes>
                    <Route path ='/add' element={<AddProduct />}/>
                    <Route path ='/edit/:id' element={<EditProduct/>}/>

                    <Route path='/' element={<Home />}/>
                    <Route path='/detail/:id' element={<ProductDetail/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;