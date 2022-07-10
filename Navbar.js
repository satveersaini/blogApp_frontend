import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <h2>Saste Blogs</h2>
      <Link to={"/"}>
        <AiFillHome /> Home
      </Link>
      <Link to={"/post/new"}>
        <AiFillPlusCircle /> New Blog
      </Link>
    </div>
  );
}

export default Navbar;
