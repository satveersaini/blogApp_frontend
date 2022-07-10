import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
function Home() {
  async function getAllPosts() {
    const res = await axios.get("http://localhost:3030");
    setPosts(res.data);
  }
  useEffect(() => {
    getAllPosts();
  }, []);
  const [posts, setPosts] = useState([]);
  const navigator = useNavigate();
  return (
    <div className="home">
      <Link to={"/post/new"} id="new">
        <AiFillPlusCircle /> New Blog
      </Link>
      <div id="inside">
        {posts.map((post) => {
          return (
            <div
              className="Homepost"
              key={post._id}
              onClick={() => {
                navigator(`/post/${post._id}`);
              }}
            >
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <div className="bottom">
                <div className="tags">
                  {post.tags?.map((tag, index) => {
                    return <span key={index}>{tag}</span>;
                  })}
                </div>
                <h2>Created by : {post.creator}</h2>
              </div>
              {/* <Link to={`/post/${post._id}`}>Know more</Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
