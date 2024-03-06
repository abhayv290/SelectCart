import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'myCart',
    initialState: { itemList: [], showCart: false, totalQty: 0, Total_Price: 0 },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            // newItem can be an existing one, so
            const existingItem = state.itemList.find((item) => item.id === newItem.id);
            if (existingItem) {
                existingItem.qty++;
                existingItem.totalPrice += newItem.price;
                state.totalQty++;
                state.Total_Price += newItem.price;
            } else {
                state.itemList.push({
                    id: newItem.id,
                    name: newItem.name,
                    img: newItem.imgUrl,
                    price: newItem.price,
                    qty: 1,
                    totalPrice: newItem.price,
                });
                state.totalQty++;
                state.Total_Price += newItem.price
            }
        },
        updateCart(state, action) {
            const update = action.payload;
            const existingItem = state.itemList.find((item) => item.id === update.id);
            if (existingItem) {
                existingItem.qty += update.qty;
                state.totalQty += update.qty
                state.Total_Price += update.price
            }
        },
        setShowCart(state, action) {
            state.showCart = action.payload;
        }
    }
});

export const { addToCart, updateCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;
