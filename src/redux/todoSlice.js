import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// action
 export const getAllTodos =  createAsyncThunk("todo/getTodo", async() => {
    try {
        const {data} = await axios.get("http://localhost:5000/todos")
        return data
    } catch (error) {
        return error.message
    }
})

export const addTodo = createAsyncThunk("todo/addTodo", async todoData => {
    try {
        const {data} = await axios.post("http://localhost:5000/todos", todoData) 
        return data
    } catch (error) {
        return error.message
    }
})

// action end

const todoSlice =  createSlice({
    name:"todos",
    initialState: { todos: [], loading: false},
    reducers: {},
    extraReducers(builder){                               //swith
        builder
        .addCase(getAllTodos.pending, (state, {payload}) =>{
            state.loading = true
        })    
        .addCase(getAllTodos.fulfilled, (state, {payload}) => {
            state.loading = false; 
            state.todos = payload;
        }
        )   
        .addCase(getAllTodos.rejected , (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })    

        .addCase(addTodo.pending , (state, {payload}) => {
            state.loading = false;
        })  
        
        .addCase(addTodo.fulfilled , (state, {payload}) => {
            state.loading = false;
            state.todoAdded = true
        })  

        .addCase(addTodo.rejected , (state, {payload}) => {
            state.loading = false;
            state.error = payload
        })
    }})

export default todoSlice.reducer