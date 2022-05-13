import React from "react";
import "./ConnectDescription.css";
import GraphCard from '../graphCard/graphCard';
import { Link } from "react-router-dom";

export default function ConnectDescription() {
    return(
        <div class="parentCD">
            <div style={{marginTop:20, marginLeft:60}}>
                <strong class='spanCd2'>
                        Diversify YOUR investments with <span style={{color: '#ff6347'}}>PhonicHouse</span> investments
                </strong>
            </div>
            <div style={{display: "flex", flex: 'row'}}>
                <div class="childCD1">
                <Link to="/existingArtist">
                    <GraphCard 
                        color="#FFE633"
                        txtColor="#01FE5E"
                        title="RB 500"
                        delta="+4.08 (64%)"
                    />
                </Link>
                </div>
                <div class="childCD1">
                    <div style={{marginTop:10}}>
                        <strong class='spanCd2'>
                                500 Most Streamed R&B artists
                        </strong>
                    </div>
                    <div style={{marginTop:5}}>
                        <span class='spanCd4'>
                            - of Top 100 overall artists, 10 included
                        </span>
                    </div>
                    <div style={{marginTop:5}}>
                        <span class='spanCd4'>
                            - 35.4% are releasing albums this months
                        </span>
                    </div>
                    <div style={{marginTop:5}}>
                        <span class='spanCd4'>
                            - #2 most frequently NFT today
                        </span>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", flex: 'row'}}>
                <div class="childCD2">
                <Link to="/existingArtist">
                    <GraphCard
                        color="#FE31F7"
                        txtColor="#01FE5E"
                        title="RB 500"
                        delta="+4.08 (64%)"
                    />
                </Link>
                </div>
                <div class="childCD1">
                    <div style={{marginTop:10}}>
                        <strong class='spanCd2'>
                                200 Most Streamed POP artists
                        </strong>
                    </div>
                    <div style={{marginTop:5}}>
                        <span class='spanCd4'>
                            - of Top 100 overall artists, 10 included
                        </span>
                    </div>
                    <div style={{marginTop:5}}>
                        <span class='spanCd4'>
                            - 3.5% are releasing albums this months
                        </span>
                    </div>
                    <div style={{marginTop:5}}>
                        <span class='spanCd4'>
                            - upcoming pop awards ceremony
                        </span>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", flex: 'row'}}>
                <div class="childCD3">
                <Link to="/existingArtist">
                    <GraphCard
                        color="#FE31F7"
                        txtColor="#01FE5E"
                        title="RB 500"
                        delta="+4.08 (64%)"
                    />
                </Link>
                </div>
                <div class="childCD1">
                    <div style={{marginTop:10}}>
                        <strong class='spanCd2'>
                                300 Most Streamed rappers
                        </strong>
                    </div>
                    <div style={{marginTop:5}}>
                        <span class='spanCd4'>
                            - Most recently created NFTs
                        </span>
                    </div>
                    <div style={{marginTop:5}}>
                        <span class='spanCd4'>
                            - relates to artists in your Portfolio
                        </span>
                    </div>
                    <div style={{marginTop:5}}>
                        <span class='spanCd4'>
                            - #1 frequently trader NFT today
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};