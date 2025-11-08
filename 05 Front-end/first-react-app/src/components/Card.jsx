import React from 'react'
import './card.css'
function Card() {
  return (
   <div id="an">
    <div className="adi">
        <h4>Pizza</h4>
        <img src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" alt="" height={100} width={100} />
        <h6>Rate</h6>
    </div>
    <div className="adi">
        <h4>Burger</h4>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_841144.JPG" alt="" height={100} width={100} />
        
        <h6>Rate</h6>
    </div>
    <div className="adi">
        <h4>Cake</h4>
        <img src="https://www.warmoven.in/cdn/shop/files/duel-delight-chocolate_-cake.jpg?v=1749833568&width=1080" alt="" height={100} width={100} />
        <h6>Rate</h6>
    </div>
   </div>
  )
}

export default Card