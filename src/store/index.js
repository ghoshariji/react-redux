import { configureStore } from "@reduxjs/toolkit";
import users from "./slice/UserS;ice";

const store = configureStore({
    reducer:{
        users:users
    }
})

export default store