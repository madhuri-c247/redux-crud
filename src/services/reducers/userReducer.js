import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";

const userSlice = createSlice({
    name: "users",
    initialState: data,
    reducers: {
        fetchData: (state, action) => {
            action.payload.map((item) => {
                return state.push(item)
            })
        },

        addUser: (state, action) => {
            state.push(action.payload)
        },

        deleteUser: (state, action) => {
            const { id } = action.payload
            const leftUser = state.find((item) => item.id !== id)
            if (leftUser) {
                return state.filter(item => item.id !== id)
            }
        },

        editUser: (state, action) => {
            const { id, Data } = action.payload;      
            return state.map(user =>
                user.id === parseInt(id) ? { ...user, ...Data } : user
            );
        }
    }
})

export const { addUser, fetchData, deleteUser, editUser } = userSlice.actions
export default userSlice.reducer;