import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addItem: (state, action) => {
            const itemToAdd = action.payload;
            const existingItem = state.find(item => item.id === itemToAdd.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...itemToAdd, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload);
            if (existingItem) {
                existingItem.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
        }
    }
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
