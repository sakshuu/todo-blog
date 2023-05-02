import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = { blogs : [], singleBlog: {}, error: false }

const data = [
    {id:nanoid(), title:"Redux toolkit is awsome", desc: "lorem" },
    {id:nanoid(), title:"react is good", desc: "lorem" }
]

const BlogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        addBlog: {
            reducer: (state, { payload }) => {
                 state.blogs.push(payload)
            },
            prepare: ({ title, desc }) => {
        //    processing
        return{
            payload: {
                id: nanoid(),
                title,
                desc
            }
        }
            }
        },
        getBlog: (state, { payload }) => {
            // state.blogs= data
         },
        updateBlog: () => { },
        deleteBlog: () => { },
        getSingleBlog:( state, { payload}) => {
              let blog = state.blogs.find(item => item.id === payload)
              blog
              ? state.singleBlog = blog
              : state.error = "Unable to find Blog"
        }
    }
})

export default BlogSlice.reducer
export const { addBlog, getBlog, updateBlog, deleteBlog, getSingleBlog } = BlogSlice.actions