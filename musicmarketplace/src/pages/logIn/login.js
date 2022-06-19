import React from 'react'
import TopNavBar from "../../components/TopNavbar/TopNavBar";
import "./login.css"

export default function Login() {
    return (
<div className='booty'>
            
        {/* <div>
            <TopNavBar />
        </div> */}

<div>
    {/* <form action="/Home">  */}
    <a href = "/" class='noUnderline'>

    <div class = "buttonTwo"> <span>Return</span></div>
    
    </a>
    {/* </form> */}
</div>


<div>

    <h1 class="headingg"><font color="#FF6B6A">phonic</font><font color="#ffc0bf">house</font></h1>

</div>

<div class = "usernname">
    <font color="#ffc0bf">
    <label>
    Username: <input type="text" name="name" placeholder="Josh" maxlength="40" required></input>
    
    </label>
    </font>
</div>


<div class = "password">
    <font color="#ffc0bf">
    <label>
    Password: <input type="password" password = "password" placeholder="696969" maxlength="40" required></input>
    </label>
    </font>
</div>
       

<div class="centerTxt">
        
      <font color="#FF6B6A">Haven't registered ? 
      
      
       <a href="/UserOrArtist" target="_blank" class='noUnderline'><font color="#ffc0bf"> Sign up</font></a>
       </font>
    
</div>

    
<div>
    {/* <form action="/Home">  */}
    <a href = "/" class='noUnderline'>

    <div class = "buttonLog"> <span>Log In</span></div>
    
    </a>
    {/* </form> */}
</div>


    {/* if(document.getElementById('login').clicked == true)
{
   send post request to django REST API via js
   recieve response in form of json.
   if response is true, redirect to home page
   fetch()
   
} */}



    {/* <button class="glow-on-hover" type="button">Just Testing</button> */}

        </div>
    );
}