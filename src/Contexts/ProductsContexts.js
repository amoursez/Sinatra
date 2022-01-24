import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { API } from '../Helpers/Constants'

export const productContext = createContext()

const INIT_STATE = {
    products: null,
    edit: null,
    paginatedPages: 1,
    detail: {}
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case 'GET_PRODUCTS': 
            return {
                ...state, products: action.payload.data,
                paginatedPages: Math.ceil(action.payload.headers ['x-total-count'] / 3)
            };
        case 'GET_PRODUCT_TO_EDIT':
            return {
                ...state, edit: action.payload
            }
        case 'GET_PRODUCT_DETAIL':
            return {
                ...state, detail: action.payload
            }
        default: 
            return state    
    }
} 

const ProductsContextProvider = ({ children }) => {
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

    //! update
    const editProduct = async (id) => {
        try {
            let res = await axios(`${API}/${id}`)
            let action = {
                type: 'GET_PRODUCT_TO_EDIT',
                payload: res.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }

    //! Save edited product
    const saveEditedProduct = async (updatedProduct) => {
        try {
            await axios.patch(`${API}/${updatedProduct.id}`, updatedProduct)
        } catch (error) {
            console.log(error);
        }
    }

    //! Delete
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${API}/${id}`)
            getProducts()
        } catch (error) {
            console.log(error);
        }
    }

    //! get detail
    const getDetail = async (id) => {
        const res = await axios(`${API}/${id}`)
        let action = {
            type: 'GET_PRODUCT_DETAIL',
            payload: res.data
        }
        dispatch(action)
    }

    return (
        
        <productContext.Provider value={{
            products: state.products,
            edit: state.edit,
            paginatedPages: state.paginatedPages,
            detail: state.detail,
            addProduct,
            getProducts,
            editProduct,
            saveEditedProduct,
            deleteProduct,
            getDetail
        }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductsContextProvider;