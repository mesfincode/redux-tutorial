import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";
import Search from "../../components/Search";

const Post = () => {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const handleAddPost = (e) => {
    e.preventDefault();

    dispatch(addPost({ title: title, content: content }));
  };
  return (
    <div className=" sm:pl-[250px] sm:pr-[250px] bg-primary-5  h-screen ">
      <div className=" flex flex-col gap-4 mx-8 justify-center items-center ">
        {" "}
        <Search />
      </div>
      <div className=" flex flex-col gap-4 mx-8 justify-center items-center ">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="border-red-50 w-[300px]"
          placeholder="Title"
        />
        <textarea
          type="content"
          onChange={(e) => setContent(e.target.value)}
          className="border-red-50 w-[300px]"
          placeholder="Write your content"
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
