import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleBlog } from '../redux/blogSlice'

export default function Details() {
    const {blogId } = useParams()
const dispatch = useDispatch()
const { singleBlog, error } = useSelector(state => state.allBlogs )
useEffect(e => {
dispatch(getSingleBlog(blogId))
}, [])
    
  return (<>
  <h3>{singleBlog.title }</h3>
  <p>{singleBlog.desc }</p>
  </>
  )
}
