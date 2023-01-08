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
      const res = await axios.get("/admin/" + path);
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
        <div class='wording-post'>
        <h1 class='name-title'>Customer: {post.name}</h1>
        <h1 class='PostTitle'>Customer Details: </h1>
        <p className="singlePostDesc">Contact: {post.contact}</p>
        <p className="singlePostDesc">Email: {post.email}</p>

        <h1 class='PostTitle'>Collection and return details: </h1>
        <p className="singlePostDesc">Collection Date: {post.collectiondate}</p>
        <p className="singlePostDesc">Collection Time: {post.collectiontime}</p>

        <p className="singlePostDesc">Return Date: {post.returndate}</p>
        <p className="singlePostDesc">Collection Time: {post.returntime}</p>

        <h1 class='PostTitle'>Items for Storage: </h1>
        <p className="singlePostDesc">Small Items: {post.smallitems}</p>
        <p className="singlePostDesc">Large Items: {post.largeitems}</p>
        <p className="singlePostDesc">Huge Iterms: {post.hugeitems}</p>

        <h1 class='PostTitle'>Storage Duration and place of residence: </h1>
        <p className="singlePostDesc">Duration: {post.duration}</p>
        <p className="singlePostDesc">Residence: {post.residence}</p>

        <p className="singlePostDesc"> Additional Notes: {post.notes}</p>

        <h1 className="singlePriceDesc">Total Price: {getTotal()}</h1>
        </div>
        </div>
      </div>
    )
}