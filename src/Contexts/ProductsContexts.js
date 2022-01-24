import React, { createContext, useReducer } from 'react';

export const productContext = createContext()

const INIT_STATE = {
    products: null
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case 'GET_PRODUCTS':
            
    }
} 

const ProductsContextsProvider = ({ children }) => {
    const [state, dispatch] = useReducer()
    return (
        <productContext.Provider value={{
            products: state.products
        }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductsContextsProvider;