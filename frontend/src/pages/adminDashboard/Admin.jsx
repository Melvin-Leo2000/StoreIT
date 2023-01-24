import React,{useEffect, useState } from 'react'
import './Admin.css'
import { Link } from "react-router-dom";
import axios from "axios";




export default function Admin({posts}) {

  const [bodyColor, setaltBodyColor] = useState("green");
  
  const [colo, setBodyColor] = useState("white");


  console.log(posts.collected)

  let swtch = posts.collected

  const updateCollect = async () => {
    const collected = !swtch
    swtch = collected
    if (swtch){
      setBodyColor("green")
    }
    else{
      setaltBodyColor("white")
    }
    try {
      await axios.put(`/admin/${posts._id}`, {
        collected,
      });
    } catch (err) {}
  }
  const getTotal = () => {
    let totalcost = 0;
    totalcost = posts.duration * (posts.smallitems * 8 + posts.largeitems * 15 + posts.hugeitems * 22)
    return totalcost
  }


  //onClick={}>
  return (
    <div className="customer-order">
      {posts.collected && (
                    <div>
                      <div style={{backgroundColor: bodyColor}} >
                        <Link class='link-removal' to={`/post/${posts._id}`}>
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
                              <button onClick={updateCollect}>Undo</button>
                        </div>
                    </div>
                  )}

            {!posts.collected && (
                <div>
                  <div style={{backgroundColor: colo}}>
                    <Link class='link-removal' to={`/post/${posts._id}`}>
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
                          <button onClick={updateCollect}>Complete</button>
                    </div>
                  </div>
                  )}
    </div>
  )
}