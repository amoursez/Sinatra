import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsContextProvider from './Contexts/ProductsContexts';
import MyNavbar from './Components/Header/MyNavbar';
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home';
import AddProduct from './Components/Admin/AddProduct/AddProduct';
import EditProduct from './Components/Admin/EditProduct/EditProduct';
import ProductDetail from './Components/Product/ProductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';

import Register from './Components/Auth/Register/Register';
import Login from './Components/Auth/Login/Login';

import Checkout from './Components/PayForm/Checkout';
import Products from './Components/Product/Products';
import Favorites from './Components/Favorites/Favorites';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';


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
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/products' element={<Products/>}/>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/favorites' element={<Favorites/>} />
                    <Route path='/payform' element={<Checkout/>} />
                    <Route path='/about' element={<About />}/>
                    <Route path='/contacts' element={<Contacts />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </ProductsContextProvider>
    );
};

export default MyRoutes;