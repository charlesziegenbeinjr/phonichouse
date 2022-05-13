import React from 'react'
import TopNavBar from "../../components/TopNavbar/TopNavBar";
import SideNavbar from "../../components/SideNavbar/SideNavbar"; 
import './Connect.css';
import ConnectCard from '../../components/ConnectCard/ConnectCard';
import ConnectDescription from '../../components/ConnectDescription/ConnectDescription';

export default function Connect() {
    return (
        <div>
            <TopNavBar />
            <div style={{display: "flex", flex: "row"}}>
                <div class="div1C">
                    <div class="spotifyC">
                        <div style={{marginTop:30, marginLeft: 15, position: "absolute", width: 400}}>
                            <strong style={{color: "#081041"}}>
                                Link Your Spotify account to <strong style={{color: "#ff6347"}}>Phonichouse</strong> for the ultimate recommendations
                            </strong>
                        </div>
                    </div>
                    <div style={{marginTop:50}}>
                        <ConnectDescription />
                    </div>
                </div>
                <div class="div2C">
                    <ConnectCard />
                </div>
            </div>
            <SideNavbar />
        </div>
    )
}