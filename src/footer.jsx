import React from 'react';


import './body.css'
import instagram from "./instagram_icon.png"
import whatsapp from "./whatsapp_icon.png"


function footer(){
    return (
    <div id='footer'>
    <div style={{marginRight:"5%", marginLeft: "2%"}}>
    <img style={{width:"2rem", height:"2rem"}} src={instagram} alt="instagram icon"/> damisco_creations
        </div>
    Copyright© 2022
    <div style={{marginRight:"2%", marginLeft: "5%"}}>
    <img style={{width:"2rem", height:"2rem"}} src={whatsapp} alt="instagram icon"/> +2348134274863
    </div>
    </div>
    )
}


export default footer;