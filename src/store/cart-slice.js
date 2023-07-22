import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: [] ||  [ {id: 1, price: 10, quantity: 1, totalPrice: 10, name: 'test'}],
       changed:false,
        totalQuantity: 0,
        showCart: false,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // replaceData(state,action){
        //     state.totalQuantity = action.payload.totalQuantity;
        //     state.item = action.payload.item
        // },
        addItem(state, action) {
             state.changed = true
            const newItem = action.payload;
            const existingItem = state.item.find(value => value.id === newItem.id);

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }else{
                state.item.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                state.totalQuantity++;
            }
        },
        removeItem(state, action) {
             state.changed = true
            const id = action.payload;
            const existingItem = state.item.find(value => value.id === id);
            
            if (existingItem.quantity === 1) {
                state.item = state.item.filter(value=> value.id !== id)
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                
            }
            
        },
        setShowCart(state){
            state.showCart = !state.showCart;
        },
        clearCart(state){
            state.item= []
            state.totalQuantity = 0;
        }
    }
})


export const cartActions = cartSlice.actions

export default cartSlice
