import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import categories from '../../../public/recursos/categories.json'

export interface Category{
    id?:number;
    name?:string;
    icon?:string;
}
export interface CategoryState{
    list?:Category[]
}

export interface Action{
    payload:Category[]
}
const initialState:CategoryState = {list:[]};

export const categoriSlice= createSlice({ 
    name: "categoriasFecth",
    initialState,
    reducers: {
        setCategoriesList: (state, action:Action) => {
            state.list = action.payload;
        }
    },
})

export const {setCategoriesList} = categoriSlice.actions;


export default categoriSlice.reducer;

export const fetchAllCategories = () => (dispatch: any,) => {
        const get = categories
        dispatch(setCategoriesList(get))      
}