import React from 'react'


export default function Admin({post}) {
  return (
    <div>
      <div className="postInfo">
        <span className="postDate">{post.name}</span>
      </div>
      <span className="postTitle">
          <div>{post.contact}</div>
      </span>
      <span className="postTitle">
          <div>{post.email}</div>
      </span>
      <span className="postTitle">
          <div>{post.residence}</div>
      </span>

    </div>
  )
}