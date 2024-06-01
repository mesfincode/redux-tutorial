import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";

const Post = () => {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [title,setTitle] = useState();
  const [content,setContent] = useState();
  const handleAddPost = (e)=>{
       e.preventDefault()

       dispatch(addPost({title:title,content:content}))

  }
  return (
    <div className=" bg-black text-white h-screen ">
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          type="content"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content"
        />
        <button onClick={handleAddPost}>
            Add Post
        </button>
      </div>
    </div>
  );
};

export default Post;
