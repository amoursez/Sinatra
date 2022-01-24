import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { API } from '../Helpers/Constants'

export const productContext = createContext()

const INIT_STATE = {
    products: null
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case 'GET_PRODUCTS': 
        return {
            ...state, products: action.payload.data,
            paginatedPages: Math.ceil(action.payload.headers ['x-total-count'] / 3)
        };
            
    }
} 

const ProductsContextsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    
    //! Create
    const addProduct = async (newProduct) => {
        try{
            let res = await axios.post(API, newProduct)
            getProducts()
            return res
        } catch (error) {
            console.log(error);
        }
    }

    //! Read
    const getProducts = async () => {
        try{
           let res = await axios(`${API}${window.location.search}`)
           let action = {
               type: 'GET_PRODUCTS',
               payload: res            
           }
           dispatch(action)
           console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        
        <productContext.Provider value={{
            products: state.products,
            addProduct,
            getProducts,
        }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductsContextsProvider;