import React from 'react'
import "./Home.css"
import logo from "./images/storeit-front.png"

function Home() {
  return (
    <div>
    <section class="section-a">
      <div class="container">
        <div>
          <h1>StoreIT with us!</h1>
          <p>
            Storage space solutions for campus dwellers!
          </p>
          <a href="/order" class="btn">Read More</a>
        </div>
        <img class="section-a-image" src={logo} alt="" />
      </div>
    </section>
    </div>
  )
}

export default Home