import React from 'react'
import "./ChatCard.css"

export default function chatcard(props) {
    return (
        <div className = "chatcard">
            <img className="img" src={props.src}></img>
            <strong style={{position: 'absolute', marginLeft: 56, marginTop: 10, fontWeight: 500, color: "#081041"}}>{props.name}</strong> 
            <small style={{position: 'absolute', marginLeft: 186, marginTop: 11, fontWeight: 200, color: "#696969",   letterSpacing: "-0.5px"}}>{props.time}</small>
            <p style={{position: 'absolute', color: "#081041", marginTop: 30, marginLeft: 56, fontSize: 10, fontWeight: 450}}>{props.text}</p>  
        </div>
    )
}