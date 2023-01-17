import React from 'react'

export default function Namecard(prop) {
  return (
    
    <div className="card" style={{width: '18rem'}}>
        <img src={prop.product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prop.product.title}</h5>
          <p className="card-text">{prop.product.description}</p>
          <p className="card-text"><b>Price = {prop.product.price}</b></p>
          
          <a href="#" className="btn btn-primary mx-3">Buy Now</a>
          <a href="#" className="btn btn-success ">Add to Card</a>
        </div>
      </div>
  )
}
