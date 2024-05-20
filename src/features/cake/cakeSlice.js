import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 10
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        // set of action name 
        order: (state) => {
            state.count--;
        },
        restocked: (state, action) => {
            state.count += action.payload;
        }
    }
});

export default cakeSlice.reducer;
export const { order, restocked } = cakeSlice.actions