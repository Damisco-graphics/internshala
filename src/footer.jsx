import React from 'react';


import './body.css'
import myImage from "./instagram_icon.png"

function footer(){
    return (
    <div id='footer'>
    <div style={{marginRight:"20%", marginLeft: "2%"}}>
    <img style={{width:"2rem", height:"2rem"}} src={myImage} alt="instagram icon"/> damisco_creations

    </div>
    Copyright© 2022
    </div>
    )
}


export default footer;