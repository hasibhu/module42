import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({ handelAddToBookmark, handleReadingTime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="w-2/3 border border-red-400 space-y-3 p-2 ">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            
            {/* Send data to blog component  */}
            {
                blogs.map(blog => <Blog
                    key = {blog.id}
                    blog={blog}
                    handelAddToBookmark={handelAddToBookmark}
                    handleReadingTime={handleReadingTime}
                ></Blog> )
           }
            
        </div>
    );
};

export default Blogs;