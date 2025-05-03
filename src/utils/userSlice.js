import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload  //when you return something from here, the state will become that returned value
        },
        removeUser:(state,action)=>{
            return null
        }
    }
})

export const {addUser,removeUser}=userSlice.actions

export default userSlice.reducer