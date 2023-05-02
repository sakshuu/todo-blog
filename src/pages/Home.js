import React, { useEffect } from 'react'
import { useDispatch, useSelector  } from "react-redux";
import BlogCard from '../components/BlogCard';
import { getBlog } from '../redux/blogSlice';

export default function Home() {
    const { blogs } = useSelector(state => state.allBlogs )
    const dispatch = useDispatch()
useEffect(e => {
    dispatch(getBlog())
}, [])

const blogGrid = blogs.map(blog => <div key={blog.id} className='col-sm-6'>
    <BlogCard blog={blog}/>
    </div>
    )

  return (
    <div className="container">
        {
            blogs.length === 0  
            ? <h1 className='test-center'>No Bogs Found</h1>
            : <div className='row'>{blogGrid}</div>
        }
    </div>
  )
}
