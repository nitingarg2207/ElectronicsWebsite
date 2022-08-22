import React from 'react'
import { Link } from "react-router-dom";

const Product = () => {
  const images=["https://images-na.ssl-images-amazon.com/images/G/31/img22/Wireless/AugART2022/Teaser1/LP/Brand-farm._CB631643329_.jpg","https://images-na.ssl-images-amazon.com/images/G/31/img22/Wireless/AugART2022/Teaser1/LP/Brand-farm1._CB631643329_.jpg","https://images-na.ssl-images-amazon.com/images/G/31/img22/Wireless/AugART2022/Teaser1/LP/Brand-farm2._CB631643329_.jpg","https://images-na.ssl-images-amazon.com/images/G/31/img22/Wireless/AugART2022/Teaser1/LP/Brand-farm7._CB631643329_.jpg","https://images-na.ssl-images-amazon.com/images/G/31/img22/Wireless/AugART2022/Teaser1/LP/Brand-farm4._CB631643329_.jpg","https://images-na.ssl-images-amazon.com/images/G/31/img22/Wireless/AugART2022/Teaser1/LP/Brand-farm6._CB631643329_.jpg"]
  return (
    <>
      <div className="txt">
        <h1 className="imagesPara">Smartphones By Brands </h1>
      </div>
      <div className="indian">
        <div>
          <Link to="/cart">
          <img src={images[0]} alt=""/>
          </Link>
        </div>
        <div>
          <Link to="/cart">
          <img src={images[1]} alt=""/>
          </Link>
        </div>
        <div>
          <Link to="/cart">
          <img src={images[2]} alt=""/>
          </Link>
        </div>
        <div>
          <Link to="/cart">
          <img src={images[3]} alt=""/>
          </Link>
        </div>
        <div>
          <Link to="/cart">
          <img src={images[4]} alt=""/>
          </Link>
        </div>
        <div>
          <Link to="/cart">
            <img src={images[5]} alt=""/>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Product