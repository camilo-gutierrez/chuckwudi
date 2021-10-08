import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import categories from "./slices/categories";
import products from "./slices/products";
import cart from "./slices/cart";

const rootReducer = combineReducers({
    categories,
    products,
    cart

})

const store = configureStore({
      reducer: rootReducer
})


export default store;

export type RootState = ReturnType<typeof configureStore>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof configureStore



