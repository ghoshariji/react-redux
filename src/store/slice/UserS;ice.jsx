import {createSlice} from "@reduxjs/toolkit"

const users = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action) {
            state.push(action.payload);
            console.log(action.payload);
        },
        removeUser(state,action) {
            return []
        }
    }
})

export default users.reducer

export const {addUser,removeUser} = users.actions