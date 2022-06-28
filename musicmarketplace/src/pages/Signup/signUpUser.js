import React from 'react'
import "./signUpUser.css"

export default function SignUpUser() {
    return (
<div class = "SignUpUserBackGround">

    <div>
        <a href = "/UserOrArtist" class='SignUpUsernoUnderline'>

        <div class = "SignUpUserbuttonRet"> Return</div>
    
        </a>
    </div>


<div class = "SignUpUserFirstName">
    <font color="#ffc0bf">
    <label>
    First name: <input type="text" name="name" placeholder="Tyler" maxlength="40" required></input>
    
    </label>
    </font>


</div>

<div class = "SignUpUserMiddleName">
<font color="#ffc0bf">
    <span>
    Middle name: <input type="text" name="name" placeholder="Meow" maxlength="40" required></input>
    
    </span>
    </font>
</div>


<div class = "SignUpUserLastName">
<font color="#ffc0bf">
    <label>
    Last Name: <input type="text" name="name" placeholder="Busda" maxlength="40" required></input>
    
    </label>
    </font>
</div>


<div class = "SignUpUserusernname">
    <font color="#ffc0bf">
    <label>
    Username: <input type="text" name="name" placeholder="TylerDeTrader" maxlength="40" required></input>
    
    </label>
    </font>
</div>

<div class = "SignUpUserpassword">
    <font color="#ffc0bf">
    <label>
    Password: <input type="password" password = "password" placeholder="696969" maxlength="40" required></input>
    </label>
    </font>
</div>

<div class = "SignUpUserRepassword">
    <font color="#ffc0bf">
    <label>
    ReType: Password: <input type="password" password = "password" placeholder="Re-type password" maxlength="40" required></input>
    </label>
    </font>
</div>

<div class="SignUpUsercenterTxt">
        
      <font color="#FF6B6A">Already have an account ?
      
      
       <a href="/login" class='noUnderline'><font color="#ffc0bf"> Login</font></a>
       
       {/* do target="_blank" for opening a new link when clicking login */}
       
       </font>
    
</div>


<div>

    <a href = "/" class='SignUpUsernoUnderline'>

    <div class = "SignUpUserButton"> <span>Sign Up</span></div>
    
    </a>

</div>
    

</div>



);

}