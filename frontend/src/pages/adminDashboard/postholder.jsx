import React from "react";
import Post from "./Admin.jsx"
import "./postholder.css"

export default function Posts({ posts }) {

    return (
      <div>
        {posts && posts.length && posts.map((p, index) => (
          <Post post={p} />
        ))}
      </div>
    );
  }