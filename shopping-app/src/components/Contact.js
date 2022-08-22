import React from 'react'
import email from '../Images/email.svg'
import location from '../Images/location.svg'
import phone from '../Images/phone.svg'

const Contact = () => {
  // 43D8C9
  return (
    <div>
        <div className="cntnr" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',margin:'20px',width: '100%'}}>
        <div className="card" style={styles.card}>
          <img src={location} style={styles.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>OUR MAIN OFFICE</h5>
            <p className="card-text" style={{margin: "19px 0 0"}}>Chitkara University NH-64 Rajpura, Punjab</p>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <img src={phone} style={styles.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>PHONE NUMBER</h5>
            <p className="card-text" style={{margin: "19px 0 0"}}>234-9876-5400
888-0123-4567 (Toll Free)</p>
          </div>
        </div>
        <div className="card" style={styles.card}>
          <img src={email} style={styles.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>EMAIL</h5>
            <p className="card-text" style={{margin: "19px 0 0"}}>nitin1960.be20@chitkara.edu.in</p>
          </div>
        </div>
        </div>
        <iframe title='Work Location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6873.721472487957!2d76.6646033!3d30.5249768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1659991220155!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  ) 
}

const styles={
  card:{
    width:"18rem",
    padding:'30px',
    fontFamily: 'Roboto,sans-serif',
    margin:'10px',
    backgroundColor:'#43D8C9'
  },
  image:{
    width:'30%',
    margin:'auto'
  },
  title:{
    letterSpacing: '1.2px',
    fontWeight: '650'
  }
}

export default Contact