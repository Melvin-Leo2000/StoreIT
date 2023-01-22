import React from 'react'
import './Admin.css'
import { Link } from "react-router-dom";



export default function Admin({posts}) {

  const getTotal = () => {
    let totalcost = 0;
    totalcost = posts.duration * (posts.smallitems * 8 + posts.largeitems * 15 + posts.hugeitems * 22)
    return totalcost
  }

  return (
    <Link to={`/post/${posts._id}`} className="customer-order">
    <div class='customer-grouping'>
      <div class="customer-center">
        <span className="customer-name">{posts.name}</span>
      </div>
      <hr class="customer-hr"></hr>
      <span>
          <div className="customer-contact">Contact: {posts.contact}</div>
      </span>
      <span>
          <div className="customer-residence">Residence: {posts.residence}</div>
      </span>
      <span>
          <div className="customer-price">Price: {getTotal()}</div>
      </span>
      </div>
    </Link>
  )
}