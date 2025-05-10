

import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "./cartSlice"

const Store=configureStore({
    reducer:{
        mycart:cartReduser


    }
});
export default Store;