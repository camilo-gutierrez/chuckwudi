import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';


export interface Cart{
    id?:number;
    name?:string;
    icon?:string;
    price?:number;
}
export interface CartState{
    list?:Cart[]
}

export interface Action{
    payload:Cart[]
}
const initialState:CartState = {list:[]};

export const cartSlice= createSlice({ 
    name: "cart",
    initialState,
    reducers: {
        setCartList: (state, action:Action) => {
            state.list = action.payload;
        }
    },
})

export default cartSlice.reducer;
export const {setCartList} = cartSlice.actions;
 
/* export const fetchAllCart = () => (dispatch: any,) => {
        const get = products
        dispatch(setCartList(get))      
}  */