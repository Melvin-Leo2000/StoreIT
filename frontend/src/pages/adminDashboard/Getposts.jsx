import React ,{useEffect, useState } from 'react'
import Post from "./Admin.jsx";
import axios from "axios";
import './Getpost.css'


export default function Getposts() {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/admin");
        setPosts(res.data)
        
      };
      fetchPosts();
    }, []);
  
  
  
    return (
      <div>
        <h2 class="admin-dashboard">
          Customer Orders:
        </h2>
        <div class='admin-getpost'>
            {posts?.map((posts) => {
              return(
              <Post
                posts={posts} 
                />
              )
            })}
        </div>
      </div>
      )
  }