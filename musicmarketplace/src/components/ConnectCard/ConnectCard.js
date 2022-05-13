import React from "react";
import "./ConnectCard.css";
import GraphCard from '../graphCard/graphCard';
import { Link } from "react-router-dom";

export default function DescriptionImage() {
    return(
        <div class="parentDivCc"> 
            <div style={{marginTop:10}}>
                <strong class='spanCc'>
                    Discover <span style={{color: '#ff6347'}}>New Artists</span> based on YOUR music & investments
                </strong>
            </div>      
            <div style={{marginTop: 10}}>
                <span class="spanCc2">
                    Based on your playlist: 'Gym'
                </span>
            </div>
            <div class="rowCc">
                <div class="graphCc0">
                    <Link to="/newArtist">
                    <GraphCard 
                        color="#FFE633"
                        txtColor="#01FE5E"
                        title="RB 500"
                        delta="+4.08 (64%)"
                    />
                    </Link>
                </div>
                <div class="graphCc0">
                    <Link to="/newArtist">
                    <GraphCard 
                        color="#FE31F7"
                        txtColor="#01FE5E"
                        title="RB 500"
                        delta="+4.08 (64%)"
                    />
                    </Link>
                </div>  
            </div> 
            <div style={{marginTop: 10}}>
                <span class="spanCc2">
                    Based on your Liked Songs
                </span>
            </div>
            <div class="rowCc1">
                <div class="graphCc">
                    <Link to="/newArtist">
                    <GraphCard 
                        color="#FFE633"
                        txtColor="#01FE5E"
                        title="RB 500"
                        delta="+4.08 (64%)"
                    />
                    </Link>
                </div>
                <div class="graphCc">
                    <Link to="/newArtist">
                    <GraphCard 
                        color="#01FE5E"
                        txtColor="#01FE5E"
                        title="RB 500"
                        delta="+4.08 (64%)"
                    />
                    </Link>
                </div>  
            </div> 
            <div style={{marginTop: 10}}>
                <span class="spanCc2">
                    Based on your genre prefrences
                </span>
            </div>
            <div class="rowCc2">
                <div class="graphCc">
                    <Link to="/newArtist">
                    <GraphCard 
                        color="#FE31F7"
                        txtColor="#01FE5E"
                        title="RB 500"
                        delta="+4.08 (64%)"
                    />
                    </Link>
                </div>
                <div class="graphCc">
                    <Link to="/newArtist">
                    <GraphCard 
                        color="#01FE5E"
                        txtColor="#01FE5E"
                        title="RB 500"
                        delta="+4.08 (64%)"
                    />
                    </Link>
                </div>  
            </div> 
            <div style={{marginTop:20}}>
                <strong class="spanCc5">
                    See which <span style={{color: '#ff6347'}}>New Artists</span> are being mentored by your favourite artists
                </strong>
            </div>
            <div class="rowCc3">
                <div class="cardGraphCc">
                    <div style={{marginTop:4, marginLeft:5}}>
                        <Link to="/existingArtist">
                        <GraphCard 
                                color="#01FE5E"
                                txtColor="#01FE5E"
                                title="RB 500"
                                delta="+4.08 (64%)"
                        />
                        </Link>
                    </div>
                    <span class="spanCc3">
                        Artist investments and Mentees
                    </span>
                    <div>
                        <span class="spanCc4">
                            Kesha Leys
                        </span>
                    </div>
                </div>
                <div class="cardGraphCc">
                    <div style={{marginTop:4, marginLeft:5}}>
                        <Link to="/existingArtist">
                        <GraphCard 
                                color="#01FE5E"
                                txtColor="#01FE5E"
                                title="RB 500"
                                delta="+4.08 (64%)"
                        />
                        </Link>
                    </div>
                    <span class="spanCc3">
                        Artist investments and Mentees
                    </span>
                    <div>
                        <span class="spanCc4">
                            Kesha Leys
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    );
};