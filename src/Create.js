import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title ,setTitle]= useState("");
    const [body ,setBody]= useState("");
    const [author ,setAuthor]= useState("");
    const [ispending ,setIsPending]= useState(false);
    const history= useHistory();
    const handleAdd =(e)=>{
        e.preventDefault();
        const Blog = {title ,body ,author};
        setIsPending(true);
        fetch("http://localhost:8000/blogs",
            {
                method: "POST",
                headers:{"Content-type": "application/json"},
                body: JSON.stringify(Blog),     
            }).then(()=>{
                console.log("add successfully")
                setIsPending(false);
                history.push('/')
            })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blogs</h2>
            <form onSubmit={handleAdd}>
                <label>Blog title :</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body :</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author :</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Mohamed">Mohammed</option>
                    <option value="Ali">Ail</option>
                    <option value="Saeed">Saeed</option>
                </select>
                {!ispending &&<button>Add Blog</button>}
                {ispending &&<button disabled>Add Blog....</button>}
                
            </form>
        </div>
    );
}

export default Create;