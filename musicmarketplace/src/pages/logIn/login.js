import React from 'react'
import "./login.css"

export default function Login() {
    return (
<div class="booty">
            
        {/* <div>
            <TopNavBar />
        </div> */}

<div>
    {/* <form action="/Home">  */}
    <a href = "/" class='noUnderline'>

    <div class = "LogbuttonRet"> <span>Return</span></div>
    
    </a>
    {/* </form> */}
</div>


<div>

    <h1 class="Loginheadingg"><font color="#FF6B6A">phonic</font><font color="#ffc0bf">house</font></h1>

</div>

<div class = "Loginusernname">
    <font color="#ffc0bf">
    <label>
    Username: <input type="text" name="name" placeholder="Josh" maxlength="40" required></input>
    
    </label>
    </font>
</div>


<div class = "Loginpassword">
    <font color="#ffc0bf">
    <label>
    Password: <input type="password" password = "password" placeholder="696969" maxlength="40" required></input>
    </label>
    </font>
</div>
       

<div class="LogincenterTxt">
        
      <font color="#FF6B6A">Haven't registered ? 
      
      
       <a href="/UserOrArtist" target="_blank" class='noUnderline'><font color="#ffc0bf"> Sign up</font></a>
       </font>
    
</div>

    
<div>
    {/* <form action="/Home">  */}
    <a href = "/" class='LoginnoUnderline'>

    <div class = "Logbutton"> <span>Log In</span></div>
    
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