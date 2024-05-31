
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import 'tailwindcss/tailwind.css'

const Footer = () => {
  return (
    // <div className="footer-container">
  
    //   <p>2022 THE |RED ZONE| All rights reserverd</p>
    //   <p className="icons">
    //   <AiFillInstagram onClick={()=> 
    //       // parent.open('https://www.instagram.com/onika_sharma')
    //       location.href="https://www.instagram.com/onika_sharma"
    //     } 
    //        />
    //     <AiOutlineTwitter 
        // onClick={()=> 
        
        //   location.href="     https://twitter.com/Ps_000007"
    //     } 
   
        
    //     />
    //   </p>
    // </div>




	<>
	<div className="foots">
		<div className="padd">
			<ul>
				<p className="p1">
					Red<span className="color1">Zone</span>
				</p>
				<div className="div2">
					<FaInstagram    onClick={()=> location.href="https://www.instagram.com/onika_sharma"} 
					className="icon" />
					<FaInstagram    onClick={()=> location.href="https://www.instagram.com/prajjwal_singh007"} 
					className="icon" />
					<FaTwitter className="icon"       onClick={()=> 
        
		location.href="     https://twitter.com/Ps_000007" } />
					<FaLinkedin className="icon" />
					<FaYoutube className="icon" />
				</div>
			</ul>
		</div>
	
	</div>
	<div className="div3">
		<h1 className="h11">
			© 2022-2023 All rights reserved | Build with ❤ by{" Onika || Ps007 || SK SABIR "}
			<span className="span1">
				streamline{" "}
			</span>
		</h1>
	</div>
</>




  )
}

export default Footer




