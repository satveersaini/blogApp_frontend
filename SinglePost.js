import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SinglePost.css";
import { BiLike } from "react-icons/bi";
function SinglePost() {
  const [post, setPost] = useState({});
  const id = useParams().id;
  //   console.log(id);
  async function getPost() {
    const res = await axios.get(`http://localhost:3030/${id}`);
    setPost(res.data);
  }
  useEffect(() => {
    getPost();
  }, []);
  async function handleClick() {
    const res = await axios.patch(`http://localhost:3030/${id}/like`);
    setLike(true);
    getPost();
  }
  const [like, setLike] = useState(false);
  return (
    <div className="post">
      <div className="single">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <ul>
          {post.tags?.map((tag, index) => {
            return <li key={index}>{tag}</li>;
          })}
        </ul>
        <h2>Creator : {post.creator}</h2>
        <button onClick={handleClick} disabled={like}>
          <BiLike />
          {post.upvote}
        </button>
      </div>
    </div>
  );
}

export default SinglePost;
