import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({blog}) {
  return (<>
<div className="card">
<div className="card-body">
<h1>{blog.title}</h1>
<p>{blog.desc}</p>
<p>
<Link to={`/details/${blog.id}`}>Read more</Link>
</p>
 </div>
</div>
  </>

  )
}
