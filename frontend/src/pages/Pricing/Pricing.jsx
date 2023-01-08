import React from 'react'
import "./Pricing.css"
import small from "../images/small.png"
import large from "../images/large.png"
import huge from "../images/huge.png"

function Pricing() {
  return (
<div class="background">
  <div class="pricing-container">
    <div class="panel pricing-table">
      
      <div class="pricing-plan">
        <img src={small} alt="" class="pricing-img"/>
        <h2 class="pricing-header">Small items</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Approximately the content of a backpack</li>
          <li class="pricing-features-item">Examples: Documents & photos, Books & stationery, Small appliances & cookware, Toys, Laptop</li>
        </ul>
        <span class="pricing-price">$8/month</span>
      </div>
      
      <div class="pricing-plan">
        <img src={large} alt="" class="pricing-img"/>
        <h2 class="pricing-header">Large items</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Approximately the content of a small suitcase or small luggage</li>
          <li class="pricing-features-item">Examples: Boxes containing clothing and accessories, kitchen equipment</li>
        </ul>
        <span class="pricing-price">$15/month</span>
      </div>
      
      <div class="pricing-plan">
        <img src={huge} alt="" class="pricing-img"/>
        <h2 class="pricing-header">huge items</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">Select this if your item is over the size of a large box, fragile or requires special handling</li>
          <li class="pricing-features-item">Examples: Portable Air Con, Bicycle, Small Furniture, luggage</li>
        </ul>
        <span class="pricing-price">$22/month</span>
      </div>
      
    </div>
  </div>
</div>
  )
}

export default Pricing