import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./reducers/cartReducers";
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';
import authReducer from "./slices/authSlice";


const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
  }, preloadedState: initialState,
})
export default store;