import React from 'react'
import "./uoa.css"

export default function UOA() {
    return (
<div class = "uoaback">

    <div>
        <h1><font color="red">
        Before we get started, please tell us whether
        you are artist or investor.
        </font>

        </h1>
    </div>

    <div class="bothButtons">

        <a href = "/SignUpUser" class ="uoabut uoabut3">Investor</a>
        <a href = "/SignUpArtist" class ="uoabut uoabut3" style = {{
        position: "absoulete",
        left: "200px"
        
        }}>Artist</a>

    </div>

    
    
    <a href = "/">

    <div class = "uoabuttonReturn"> <span>Return</span></div>
    
    </a>
    

</div>

    );
}