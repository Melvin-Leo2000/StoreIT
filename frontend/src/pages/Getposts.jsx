import React ,{useEffect, useState } from 'react'
import Post from './Posts.jsx'
import axios from "axios";


export default function Getposts() {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/posts");
        setPosts(res.data)

      };
      fetchPosts();
    }, []);
  
  
  
    return (
      <div >
      {posts?.map(p => {
        return(
        <Post
           posts={posts} 

           />
        )
      })}
  </div>
      )
  }