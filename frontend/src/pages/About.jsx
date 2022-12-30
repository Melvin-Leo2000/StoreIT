import React from 'react'
import "./About.css"
import { Box , Grid, Typography} from '@mui/material'
import bluebackground from './images/bluebackground.jpg'
import worry from "./images/worry.png"
import launch from "./images/launch.png"
import why from "./images/why.png"
import storage from "./images/no-storage.png"
import save from "./images/save.png"
import message from "./images/message.png"

function About() {
  return (
    <div>

    <Grid item paddingTop={8} margin='0' width="100%">
              <img src={bluebackground} alt="bluewallpaper" width ={"100%"} height="280vh" />
              <Typography 
                fontFamily={'quicksand'}
                variant="h3" 
                textAlign={'center'} 
                width={'100%'} 
                sx={{
                  position: "absolute", 
                  top: "120px", 
                  color:"#fff",
                }}
              >
                ABOUT US
              </Typography>  
      </Grid>

        <div class="section-a-about">
            <div class="about-section">
              <h2 class="about-title">Who are we?</h2>
              <img class="worry-img" src={launch} alt=""></img>
              <h3 class="about-annotation">We’re a group of NUS students who also lives on campus and faces the problem of bringing home lots of belongings and items every time the semester comes to an end.  Realizing this pain point,
              we launched StoreIT in winter of 2022 under the NUS Entrepreneurship Society's "Start" programme in hopes to resolve storage problems faced by students by batching and reducing the cost + hassle of moving their items to and from school. </h3>
              <h3 class="about-annotation">Since our inception last semester, We have managed to help more than a hundred students to store their items for our first run, and we are looking to continue making your moving out experience a seamless one.</h3>
            </div>
        </div>

        <div class="section-b-about">
            <div class="about-section">
              <h2 class="about-title">Why is this a legitimate problem?</h2>
              <img class="worry-img" src={worry} alt=""></img>
              <h3 class="about-annotation">Every year, students moving home by the end of the semester have to bring loads of items back, which can be a real hassle to carry your items especially knowing that you have to bring them back again next semester. </h3>  
              <h3 class="about-annotation">Moreover, this is an issue for foreign students, given that they have to bring it back to their home country which can be really tedious if they're bringing loads of luggage back home. 
              Given how costly and tedious it can be to hire a cab and carrying all the items home, why not batch everyone's item and store it in a safe storage place so that you can travel hassle-free? 
              This lower the cost of public transport and effort to look for a temporary shelter for your bags, while ensuring a smooth journey home. </h3>
              <h3 class="about-annotation">Cost reduction is done by batching everyone's item together, so the more people that store their items together, the cheaper it will be! </h3>
            </div>
        </div>

        <div class="section-c-about">
            <div class="about-section">
              <h2 class="about-title">Why StoreIT?</h2>
              <img class="worry-img" src={why} alt=""></img>
              <h2 class="why-us"> 1) Not all hostels offer storage solutions and even if they do, there are lots of restrictions</h2>
              <img class="worry-img" src={storage} alt=""></img>
              <h3 class="about-annotation">NUS luggage storage is only open for International Students, which means local students who want to store items are not able to use this service whatsoever. StoreIT is open to all hostel residents, regardless of where they live.  </h3>  
              <h3 class="about-annotation">Moreover, luggage storage sizes in residential colleges are often constrained by their standardised cardboard box. This is not cost effective for users whose storage volume is just over the threshold for one box, as they have to pay for two full boxes. Additionally, users are not able to store items which do not fit in a box, 
              such as chairs or tables. StoreIT offers a more specialised pricing model, dependent on individuals’ storage requirements, and is also more flexible in terms of the item dimensions. </h3>
              <h3 class="about-annotation">Cost reduction is done by batching everyone's item together, so the more people that store their items together, the cheaper it will be! </h3>
              <h2 class="why-us"> 2) Much lower cost than existing solutions</h2>
              <img class="worry-img" src={save} alt=""></img>
              <h3 class="about-annotation">In most RCs, even registering for a room for storage costs on average $200 and its really tough to find people to share it with, 
              and its not worth if you're only storing a few items. StoreIT rids you of the hassle to look for people to share the space with, and only pay for the specified space you need for your items.</h3>
              <h2 class="why-us"> 3) We're always online to answer any enquiries that you have</h2>
              <img class="worry-img" src={message} alt=""></img>
              <h3 class="about-annotation">Unlike hostel storage services, we are one text away. For any enquiries, simply text us and we will reply asap. We will address all concerns without the need for you to search for any terms / conditions or how where to store. Just be ready on the date you're moving out and we'll handle the rest!</h3>
            </div>
        </div>

      <h1 class="atb">All the best studying for you finals and leave your storage headaches to us! 👻</h1>


    </div>
  )
}

export default About