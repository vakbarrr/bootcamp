import React from "react";
import './CSS/Blog.css'

const Blog = (props) => {
    return <div className="blog-wrap">
        <img src="https://placeimg.com/640/480/tech" alt="header" />
        <p>{props.tanggal}</p>
        <p><b>{props.judul}</b></p>
        <p>{props.summary}</p>
    </div>
}

export default Blog;