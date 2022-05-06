import React from 'react'

import TopNavBar from "../../components/TopNavbar/TopNavBar";
import SideNavbar from "../../components/SideNavbar/SideNavbar";    
import BigCard from "../../components/BigCard/BigCard";
import './Explore.css';
import ConnectImage from "../../components/ConnectImage/ConnectImage";
import DescriptionImage from '../../components/DescriptionImage/DescriptionImage';
import ImageCard2 from '../../components/ImageCard2/ImageCard2';
import BasicTable from '../../components/NewListedArtists/NewListedArtists';
import LatestUpdates from '../../components/LatestUpdates/LatestUpdates';

export default function Explore() {
    return (
        <div>
            <TopNavBar />
                <div style={{display:"flex", flex: "row"}}>
                    <div>
                        <div style={{marginLeft:300, marginTop:40}}>
                            <DescriptionImage />
                        </div>
                        <div style={{marginLeft:320, marginTop:40}}>
                            <ImageCard2 />
                        </div>
                        <div style={{marginLeft:300, marginTop:40, marginBottom: 20}}>
                            <BigCard/>
                        </div>
                    </div>
                    <div>
                        <div style={{marginTop: 40, marginLeft: 120}}>
                            <LatestUpdates />
                        </div>
                        <div style={{marginTop: 40, marginLeft: 120}}>
                            <BasicTable />
                        </div>
                    </div>
                </div>
            <SideNavbar />
        </div>
    )
}
