import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const createAllusers =  createAsyncThunk("users/getTodo", async(register) => {
    try {
        const {data} = await axios.post("http://localhost:5000/users", register)
        console.log(data);
        return data
    } catch (error) {
        return error.message
    }
})

const UserSlice = createSlice({
    name:"user",
    initialState: { user: [], loading: false},
    reducers: {},
    extraReducers(builder){

        builder
        .addCase(createAllusers.pending, (state, {payload}) =>{
            state.loading = true
        })    
        .addCase(createAllusers.fulfilled, (state, {payload}) => {
            state.loading = false; 
            state.user = payload;
        }
        )   
        .addCase(createAllusers.rejected , (state, {payload}) => {
            state.loading = false;
            state.error = payload;
                                     //swith
        })
    }})

export default UserSlice.reducer