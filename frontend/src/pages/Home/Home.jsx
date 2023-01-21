import React from 'react'
import "./Home.css"
import logo from "../images/storeit-front.png"
import workone from "../images/workone.png"
import workthree from "../images/worktwo.png"
import worktwo from "../images/workthree.png"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div class = "homepage">
    
    <section class="section-a">
      <div class="home-container">
        <div>
          <h1 class="section-a-h1">StoreIT with us!</h1>
          <p class="section-a-p">
            Storage space solutions for campus dwellers!
          </p>
          <Button 
              type= "submit" 
              sx={{width:"40%" ,margin:"auto",mt: 2, borderRadius:7, height: 50}} 
              variant="contained"
              onClick={() => {
                navigate("/order")
              }}
            >Order now
          </Button>
        </div>
        <img class="section-a-image" src={logo} alt="" />
      </div>
    </section>

    <section class="section-b">
      <div class="overlay">
        <div class="section-b-inner py-5">
          <h3 class="text-2">What's the problem?</h3>
          <h2 class="text-5">It's a hassle to move things back home</h2>
          <p class="mt-1">
          <div class='home-breakline'>Imagine packing up your dorm room at the end of the semester, only to have to unpack and repack it all again in a few months. Not only is it time-consuming, but it's also a hassle to lug all of your belongings back and forth.</div>

<br></br> <div class='home-breakline'>StoreIT allow you to leave your items securely stored during the summer, so you can come back to school in the fall ready to hit the ground running. No more hauling heavy boxes or trying to fit everything into your car.

Plus, our storage solutions are affordable and accessible, making it easy for you to store your items without breaking the bank.</div>

<br class='home-breakline'></br> Don't waste another summer dealing with the inconvenience of moving all of your belongings. Choose StoreIT and enjoy a stress-free summer!
          </p>
        </div>
      </div>
    </section>
    
    <h1 class="section-c-h1">How it works</h1>
    <section class="features">
    <div class="feature-container">
      <img src={workone} alt="Flexbox Feature"/>
      <h2 class="section-c-h2">Make an order through our web app</h2>
      <p class="section-c-p">Simply go under order and fill up the form with details such as your contact, residence, number of items and its respective sizes.</p>
    </div>
    <div class="feature-container">
      <img src={worktwo} alt="Flexbox Feature"/>
      <h2 class="section-c-h2">We pick up your items and store it with us</h2>
      <p class="section-c-p">A fellow student will come down and pick up your items at the time and place of your choice.</p>
    </div>
    <div class="feature-container">
      <img src={workthree} alt="Flexbox Feature"/>
      <h2 class="section-c-h2">We deliver it back whenever you need it</h2>
      <p class="section-c-p">When you're ready to return to campus and collect your items, we will send them back to you.</p>
    </div>
  </section>

    


    </div>
  )
}

export default Home