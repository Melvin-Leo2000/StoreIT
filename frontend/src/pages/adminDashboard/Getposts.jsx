import React ,{useEffect, useState } from 'react'
import Post from "./Admin.jsx";
import axios from "axios";
import './Getpost.css'
import { useLocation, Link } from 'react-router-dom';


export default function Getposts() {

  const [posts, setPosts] = useState([]);
  const { search} = useLocation()

  let today = new Date();
  let date = today.getFullYear() + "-" + ('0' + (today.getMonth()+1)).slice(-2) + "-"+ ('0' + today.getDate()).slice(-2)

  useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/admin" + search);
        setPosts(res.data)
        
      };
      fetchPosts();
    }, [search]);
  
  
  
    return (
      <div>
        <h2 class="admin-dashboard">
          All Customer Orders:
        </h2>
        <Link to={`/admin?collectiondate=${date}`}>Collections Today</Link>
        <Link to={`/admin?returndate=${date}`}>Returns Today</Link>

        <h2>Residential Colleges</h2>
        <Link to={`/admin?residence=RVRC`}>RVRC</Link>
        <Link to={`/admin?residence=Tembusu`}>Tembusu</Link>
        <Link to={`/admin?residence=CAPT`}>CAPT</Link>
        <Link to={`/admin?residence=RC4`}>RC4</Link>

        <h2>Halls</h2>
        <Link to={`/admin?residence=Kent Ridge`}>Kent Ridge</Link>
        <Link to={`/admin?residence=Sheares`}>Sheares</Link>
        <Link to={`/admin?residence=Temasek`}>Temasek</Link>
        <Link to={`/admin?residence=Raffles`}>Raffles</Link>
        <Link to={`/admin?residence=KE7`}>KE7</Link>
        <Link to={`/admin?residence=Eusoff`}>Eusoff</Link>

        <h2>Others</h2>
        <Link to={`/admin?residence=UTR`}>UTR</Link>
        <Link to={`/admin?residence=PGPR`}>PGPR</Link>
        <Link to={`/admin?residence=PGPH`}>PGPH</Link>
        <Link to={`/admin?residence=NUS College (Cinnamon and west wing)`}>NUS College (Cinna and West Wing)</Link>



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