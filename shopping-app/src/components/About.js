import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <div className="section">
    <div className="container">
        <div className="content-section">
            <div className="title">
                <h1>About Us</h1>
            </div>
            <div className="content">
                <h3>Gadget Store is a Electronic items shopping business</h3>
                <p>If you would like to experience the best of online shopping for Electronic Products and Home Appliances in India, you are at the right place.Comprehensive product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 10-day returns policy gives you more power as a buyer. Enjoy the hassle-free experience as you shop comfortably from your home or your workplace.</p>
                <div className="button">
                    <a href="/about">Read More</a>
                </div>
            </div>
            <div className="social">
                <a href="/"><i className="fab fa-facebook-f"></i></a>
                <a href="/"><i className="fab fa-twitter"></i></a>
                <a href="/"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
        <div className="image-section">
            <img src="https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
        </div>
    </div>
</div>
  )
}

export default About