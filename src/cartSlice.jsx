


import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addcart:(state,actions)=>{
            const mydata= state.cart.filter(key=>key.id==actions.payload.id);
            if (mydata.length>=1)
            {
                alert("This Product Already Added");
            }
            else
            {
                state.cart.push(actions.payload)
            }
        
        }
    }

});
export const {addcart} = cartSlice.actions;
export default cartSlice.reducer;