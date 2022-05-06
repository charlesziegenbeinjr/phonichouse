import React from 'react'
import TopNavBar from "../../components/TopNavbar/TopNavBar";
import SideNavbar from "../../components/SideNavbar/SideNavbar"; 
import './existingArtistPage.css';
import ConnectImage from '../../components/ConnectImage/ConnectImage';
import AreaGraph from '../../components/areaGraph/areaGraph';
import NewArtistFeed from '../../components/NewArtistFeed/NewArtistFeed';
import PopularStream from '../../components/PopularStream/PopularStream';
import About from '../../components/About/About';
import AddETFShares from '../../components/AddETFShares/AddETFShares';

export default function ExistingArtistPage() {
    return (
        <div>
            <TopNavBar />
            <div style={{display: "flex", flex: "row"}}>
                <div class="div1EAP">
                    <ConnectImage name="RB 500"/>
                    <div style={{marginTop: 20}}>
                        <AreaGraph />
                    </div>
                    <div style={{marginTop: 350}}>
                        <AddETFShares />
                    </div>
                </div>
                <div class="div2EAP">
                    <div style={{marginTop: 10}}>
                        <NewArtistFeed />
                    </div>
                    <div style={{marginTop: 20}}>
                        <PopularStream />
                    </div>
                    <div style={{marginTop: 20}}>
                        <About />
                    </div>
                </div>
            </div>
            <SideNavbar />
        </div>
    )
}
