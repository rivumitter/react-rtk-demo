import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios
        .get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  })

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.isLoading = true;
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        }),
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.users = [];
            state.error = action.error.message;
        })
    }
});

export default userSlice.reducer;