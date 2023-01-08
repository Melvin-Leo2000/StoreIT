import React from 'react'
import './Admin.css'



export default function Admin({posts}) {
  return (
    <div className="customer-order">
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
          <div className="customer-price">Paid: {posts.price}</div>
      </span>

    </div>
  )
}