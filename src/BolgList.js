import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs ,title ,handlDelete}) => {
    return ( 
        <div>
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to ={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>writting by {blog.author}</p>
                    </Link>
                    {/* <button className="create" onClick={()=>{
                        handlDelete(blog.id);
                    }}>Delete</button> */}
                </div>
            ))}
        </div>
    );
}

export default BlogList