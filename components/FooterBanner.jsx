import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product1, buttonText, image,slug1,slug } }) => {
  console.log(slug1)
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${slug1.current}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img 
          src={urlFor(image[1])} height="700px" width="630px" className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner