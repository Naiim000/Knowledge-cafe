import { useEffect, useState } from "react";


const Blogs = () => {
    const[blog,setBlog]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div>
            <h2>{blog.cover}</h2>
        </div>
    );
};

export default Blogs;