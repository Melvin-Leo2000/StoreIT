import React ,{useEffect, useState } from 'react'
import Post from './AdminContact.jsx'
import axios from "axios";
import './Getpost.css'


export default function Getposts() {

  const [posts, setPosts] = useState([]);



  useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/adminContact");
        setPosts(res.data)
        
      };
      fetchPosts();
    }, []);
  
    return (
      <div class='admin-getpost'>
      {posts?.map((posts) => {
        return(
        <Post
           posts={posts} 
           />
        )
      })}
        </div>
      )
  }