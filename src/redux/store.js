import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import todoSlice from "./todoSlice";
import userSlice from "./userSlice";

const store =  configureStore({     // combinreducer sarakh kam karat
reducer: { 
    allBlogs: blogSlice,
    alltodos: todoSlice,
    allusers: userSlice
}
})  

export default store