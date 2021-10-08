import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import products from '../../../public/recursos/products.json'


export interface Product{
    id?:number;
    name?:string;
    qualification?:number;
    time?:string;
    image?:string;
    price?:number; 
}
export interface ProductState{
    list?:Product[]
}

export interface Action{
    payload:Product[]
}
const initialState:ProductState = {list:[]};

export const ProductSlice= createSlice({ 
    name: "cart",
    initialState,
    reducers: {
        setProductList: (state, action:Action) => {
            state.list = action.payload;
        }
    },
})

export default ProductSlice.reducer;
export const {setProductList} = ProductSlice.actions;

export const fetchAllProducts = () => (dispatch: any,) => {
    const getProducts = products
    dispatch(setProductList(getProducts))      
}