import React from 'react'
import "./uoa.css"

export default function UOA() {
    return (
<div>

    <div>
        <h1><font color="red">
        Before we get started, please tell us whether
        you are artist or investor.
        </font>

        </h1>
    </div>

    <div class="bothButtons">

    <a href = "/SignUpUser" class ="why why3">Investor</a>
    <a href = "/SignUpArtist" class ="why why3" style = {{
       position: "absoulete",
       left: "200px"
        
    }}>Artist</a>

    </div>

    <div>
    {/* <form action="/Home">  */}
    <a href = "/">

    <div class = "buttonTwoo"> <span>Return</span></div>
    
    </a>
    {/* </form> */}
</div>















</div>

    );
}