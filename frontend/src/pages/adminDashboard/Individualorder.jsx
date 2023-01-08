import React ,{useEffect, useState } from 'react'
import axios from "axios";
import { useLocation } from "react-router";
import './individualorder.css'


export default function Individualoder() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});


  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      console.log(post)
    };
    getPost();
  }, [post,path]);

  const getTotal = () => {
    let totalcost = 0.00;
    totalcost = post.duration * (post.smallitems * 8.00 + post.largeitems * 15.00 + post.hugeitems * 22.00)
    return totalcost
  }



  return (
      <div className='individual-order'>
        <div className='singlePostWrapper'>
        <div>Customer Details: </div>
        <div className="singlePostTitle">Customer: {post.name}</div>
        <p className="singlePostDesc">Contact: {post.contact}</p>
        <p className="singlePostDesc">Email: {post.email}</p>

        <div>Collection and return details: </div>
        <p className="singlePostDesc">Collection Date: {post.collectiondate}</p>
        <p className="singlePostDesc">Collection Time: {post.collectiontime}</p>

        <p className="singlePostDesc">Return Date: {post.returndate}</p>
        <p className="singlePostDesc">Collection Time: {post.returntime}</p>

        <div>Items for Storage: </div>
        <p className="singlePostDesc">Small Items: {post.smallitems}</p>
        <p className="singlePostDesc">Large Items: {post.largeitems}</p>
        <p className="singlePostDesc">Huge Iterms: {post.hugeitems}</p>

        <div>Storage Duration and place of residence: </div>
        <p className="singlePostDesc">Duration: {post.duration}</p>
        <p className="singlePostDesc">Residence: {post.residence}</p>

        <p className="singlePostDesc"> Additional Notes: {post.notes}</p>

        <h1>Total Price: {getTotal()}</h1>
        </div>
      </div>
    )
}