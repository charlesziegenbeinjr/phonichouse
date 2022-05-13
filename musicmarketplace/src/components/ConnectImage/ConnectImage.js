import React from "react";
import "./ConnectImage.css";
import {Link} from "react-router-dom";

export default function ConnectImage(props) {
    return(
        <div class="containerCI">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVtPLiviU2MCiNvq0uglPKS3imtDiF1GUDQ&usqp=CAU" alt="Snow" class="imgCI"/>
            <div class="bottom-left">
                <strong class="bottom-left1CI">
                    Artist EFT
                </strong>
                <strong class="bottom-left2CI">
                    {props.name}
                </strong>
            </div>
            <Link to="/confirmOrder">
            <div class="bottom-left3CI">
                <strong style={{color: "#fff"}}>
                        Artist EFT
                </strong> 
            </div>
            </Link>
        </div>
    )
}