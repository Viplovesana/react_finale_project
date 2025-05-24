

  import { ToastContainer, toast } from 'react-toastify';

import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name :"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state, actions)=>{
            const mydata= state.cart.filter(key=>key.id==actions.payload.id);
            if (mydata.length>=1)
            {
                toast.warning("This product is already added in the cart !");
           
            }
            else 
            {
                state.cart.push(actions.payload);
                toast.success("item is added");
            }
          
             
        },
            addToFav: (state, action) => {
      const exists = state.favourite.some((item) => item.id === action.payload.id);
      if (exists) {
        toast.info("This product is already in favorites");
      } else {
        state.favourite.push(action.payload);
        toast.success("Product added to favorites");
      }
    },

       
      qntyInc:(state, actions)=>{
           for (var i=0; i<state.cart.length; i++)
           {
            if (state.cart[i].id==actions.payload.id)
            {
                state.cart[i].qnty++;
            }
           }
      },

      qntyDec:(state, actions)=>{
           for (var i=0; i<state.cart.length; i++)
           {
            if (state.cart[i].id==actions.payload.id)
            {
                if (state.cart[i].qnty<=1)
                {
                   toast.error("Quantity Not be less then one !");
                }
                else 
                {
                  state.cart[i].qnty--;
                }
            }
           }
      },

      proRemove:(state, actions)=>{
           
           state.cart= state.cart.filter(item=>item.id!=actions.payload.id);
           toast.error("Product removed from the cart");

      }
       
    }
   
})
export const {addToCart, qntyInc, qntyDec, proRemove} = cartSlice.actions;
export default cartSlice.reducer;