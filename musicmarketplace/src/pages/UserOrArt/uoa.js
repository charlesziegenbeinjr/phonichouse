import React from 'react'
import "./uoa.css"

export default function UOA() {
    return (
    <div class = "uoabackground">

    <div>
        <h1><font color="red">
        Before we get started, please tell us whether
        you are artist or investor.
        </font>

        </h1>
    </div>

    <div class = "uoavl"></div>

    <div class = "uoaLeftText">
        <font color = "pink">
        If you are an investor, you only invest into artists
        and you do not publish anything.
        </font>
    </div>

    <div class = "uoaRightText">
        <font color = "pink">
        If you are an artist, you can invest in other's markets,
        publish music, etc, and you cannot invest in your own market.
        </font>
    </div>

    <div class="uoabothButtons">

        <a href = "/SignUpUser" class ="uoabut uoabut3" style = {{
        position: "absoulete",
        right: "30vw",
        top: "20vw"
        // top: "30vw"

        }}>Investor</a>

        <a href = "/SignUpArtist" class ="uoabut uoabut3" style = {{
        position: "absoulete",
        left: "10vw",
        top: "20vw"
        
        }}>Artist</a>

    </div>

    
    
    <a href = "/">

    <div class = "uoabuttonReturn"> <span>Return</span></div>
    
    </a>
    

</div>

    );
}