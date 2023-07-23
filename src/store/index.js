import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice'
import cartSlice from './cart-slice'
import uiSlice from './ui-slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'


const persistConfig = {
    key: 'root', 
    version: 1,
    storage
}

const reducer = combineReducers({
    auth :  authSlice.reducer,
        cart : cartSlice.reducer,
        ui : uiSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, reducer)
const store = configureStore({
    reducer: persistedReducer
});

export default store