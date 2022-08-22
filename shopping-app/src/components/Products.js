import React from 'react'
import { ExtraSlideshow } from './SlideShow'
import '../styles/Products.css'

const Products = () => {
  return (
    <>
    <div className="showcase">
      <h5>Name: Nitin garg</h5>
      <h5>Email: ngarg2207@gmail.com</h5>
      <h5>Email2: nitin1960.be20@chitkara.edu.in</h5>
      <h5>Contact: 8699045020</h5>
    </div>
    <div className="slider">
          <div>
              <h1>Incredible Prices on All  Your Favorite Items</h1>
          </div>
      </div>
      <div><h1>Popular Items</h1></div>
      <div className="showcase">
        <a href = "/" className= "column col-xs-6" id = "caption">
        <span className= "text"><h1>Kitchen</h1></span>
          <img src="https://images.unsplash.com/photo-1632952816212-a4f6c6a66cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" alt=""/>
        </a>
        <a href = "/" className= "column col-xs-6" id = "caption">
        <span className= "text"><h1>Home Appliances</h1></span>
          <img src="https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
        </a>
        <a href = "/" className= "column col-xs-6" id = "caption">
        <span className= "text"><h1>Beard Shavers</h1></span>
          <img src="https://images.unsplash.com/photo-1621607512022-6aecc4fed814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""/>
        </a>
        <a href = "/" className= "column col-xs-6" id = "caption">
        <span className= "text"><h1>LED TVs</h1></span>
          <img src="https://images.unsplash.com/photo-1580897275296-87979517bd4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt=""/>
        </a>
      </div>
      <ExtraSlideshow/>
    </>
  )
}

export default Products
