import "./Footer.css"

import React from 'react'
import Links from "./Links"

export default function Footer() {
    return (
        
        <div className="footer__wrapper" >
            <div className="title">
                <img  src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" alt="" srcset="" />
            </div>
           <Links/>
           <div >
               <span style={{color:"grey", fontSize:"12px", fontWeight:"400"}}>LinkedIn Corporation © 2022</span>
           </div>
           
        </div>

        

    )
}
