import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice"
import userReducer from "../features/users/userSlice"
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        users: userReducer
    }
});

export default store