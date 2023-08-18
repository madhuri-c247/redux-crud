import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";
import axios from "axios";


const base_url = 'https://fakestoreapi.com/products';
const userSlice = createSlice({
    name: "users",
    initialState:data,
    reducers: {
        fetchData:(state, action)=>{ 
            action.payload.map((item)=>{
              return state.push(item)
          })         
        },

        addUser: (state, action)=>{
            console.log(state, action,'reducers-add-user')
            state.push(action.payload)
        },

        deleteUser: (state, action)=>{
            console.log('delete',action.payload)
            const {id} = action.payload
            const leftUser  = state.find((item)=> item.id !== id)
            if(leftUser){
                return state.filter(item=> item.id !== id)
            }
        },

        editUser:(state, action) =>{
            console.log(action.payload.id,'reducer-edit-id')
            console.log(action.payload.Data,'reducer-edit-id')
            const {id, Data} = action.payload;
            // const editedUser = Data.filter((item)=> item.id == id)
            // console.log(editedUser) 
            // const editedUser = state.filter
        }
    }
}) 

export const {addUser, fetchData, deleteUser, editUser} = userSlice.actions
export default userSlice.reducer;