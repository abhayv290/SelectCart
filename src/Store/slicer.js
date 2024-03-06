import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
    name: 'counter',
    initialState: { value: 5 }, // Ensure initialState is an object
    reducers: {
        increase: (state, action) => {
            state.value += action.payload; // Mutate the state in place
        },
        decrease: (state, action) => {
            state.value -= action.payload; // Mutate the state in place
        },
    },
});

export const { increase, decrease } = counterslice.actions;
export default counterslice.reducer;
