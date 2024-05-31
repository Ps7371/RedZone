import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GiSadCrab } from 'react-icons/gi';
import { useStateContext } from '../context/StateContext';
const cancel = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
    useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
    }, []);
  return (
    <div className="success-wrapper">
    <div className="success">
      <p className="icon">
      <GiSadCrab/>
      </p>
      <h2>Sorry We Could'nt Proceed To Your Order Request!!
            We Comply To Deliver Your Order And Dispense The Service Securely!
            <br />
            Have A Gracious Day Ahead!
        </h2>

        <p className="description">
          If you have any questions, please email us at
          <a className="email" href="mailto:redzone@gmail.com">
            redzone@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Shop More?
          </button>
        </Link>
      </div>
    </div>
  )
}

export default cancel