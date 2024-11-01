import { configureStore, createSlice } from "@reduxjs/toolkit";




const productSlice=createSlice(
    {
        name:'products',
        initialState:{
            veg:[
                {name:'Tamato',price:150.0},
                {name:'Bringal',price:100.0},
                {name:'Potato',price:250.0},
                {name:'Cabage',price:100.0},
                {name:'Capsicum',price:120.0},
                ],
          nonveg:[
                {name:'Mutton',price:1050.0},
                {name:'Chiken',price:300.0},
                {name:'Fish',price:800.0},
                {name:'Prans',price:600.0},
                {name:'Crab',price:700.0},
                ]      
        },
       reducers:{} 
    }
);
const cartSlice=createSlice(
    {
      name:'Cart',
      initialState:[],
      reducers:{
        addToCart:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity +=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        },

        increament:(state,action)=>{
            const item =state.find(item=>item.name===action.payload.name)
            if(item)
            {
                item.quantity +=1;
            }
        },
        decreament:(state,action)=>{
          const item =state.find(item=>item.name===action.payload.name)
            if(item && item.quantity > 1)
            {
                item.quantity-=1;
            }
            else
            {
                return state.filter(item =>item.name !== action.payload.name);
            }
        
        },
        remove :(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name)
            if(item)
            {
                return state.filter(item=>item.name !==action.payload.name);
            }
        }
            

        }
      }  
    
)
export const{addToCart,increament,decreament,remove}=cartSlice.actions;
const store=configureStore(
    {
        reducer:
        {products:productSlice.reducer,
            Cart:cartSlice.reducer
        }
    }
)



export default store;