import React, { useState } from "react";
import "./NewPost.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";
function NewPost() {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const array = tags.split(",");
    console.log(array);
    const response = await axios.post("http://localhost:3030/", {
      title,
      description: content,
      tags: array,
      creator,
    });
    if (response.status == 200) {
      navigate(`/post/${response.data._id}`);
    } else {
      alert("something went wrong");
    }
  }
  const [title, setTitle] = useState("");
  function handleChangeInTitle(event) {
    setTitle(event.target.value);
  }
  const [content, setContent] = useState("");
  function handleChangeInContent(event) {
    setContent(event.target.value);
  }
  const [creator, setCreator] = useState("");
  function handleChangeInCreator(event) {
    setCreator(event.target.value);
  }
  const [tags, setTags] = useState("");
  function handleChangeInTags(event) {
    setTags(event.target.value);
  }
  return (
    <div className="post">
      <h1>Create a new post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title :</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleChangeInTitle}
          required
        />
        <label>Content :</label>
        <textarea
          placeholder="type your content ..."
          value={content}
          onChange={handleChangeInContent}
          required
        />
        <label>Tags :</label>
        <input
          type="text"
          placeholder="seperate tags by commas"
          value={tags}
          onChange={handleChangeInTags}
          required
        />
        <label>Creator :</label>
        <input
          type="text"
          placeholder="Your name"
          value={creator}
          onChange={handleChangeInCreator}
          required
        />
        <button>
          POST
          <AiOutlineCloudUpload id="icon" />
        </button>
      </form>
    </div>
  );
}

export default NewPost;
