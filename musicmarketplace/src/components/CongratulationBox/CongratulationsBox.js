import React, { useState } from 'react';
import './CongratulationsBox.css';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";

export default function CongratulationBox() {
    const navigate = useNavigate();
    function artistPage(){
        navigate('/');
    }
    // x.close()/
  return (
    <div id="myDialog">
      <dialog class="dialogCB" open>
          <div >
            <div class="horDivCB">
                <div class="divStrongCB1">
                    <strong class="strongCB1">
                        phonic
                    </strong>
                    <strong class="strongCB2">
                        house
                    </strong>
                </div>
            </div>
            <div class="horDivCB2">
                <div class="divStrongCB2">
                        <span class="strongCB3">
                            investing in: 
                        </span>
                        <strong class="strongCB4">
                            new artist
                        </strong>
                </div>
                <div class="divStrongCB3">
                        <span class="strongCB5">
                            Current Share price: 
                        </span>
                        <strong class="strongCB6">
                            $5
                        </strong>
                </div>
            </div>
            <div class="horDivCB3">
                <div class="horDivCB4">
                    <div class="divStrongCB4">
                            <span class="strongCB6">
                                Congratulations !
                            </span>
                            <div>
                                <span class="strongCB7">
                                    You've successfully purchased 5 shares of this artist's revenue
                                </span>
                            </div>
                    </div>
                </div>
                <div class="horDivCB5">
                    <div class="rowDivCB">
                        <div class="rowDivCB3">
                            <strong class="strongCB8">
                                   Transaction summary
                            </strong>
                        </div>
                        <div style={{float: "left", marginLeft:20, marginTop:10}}>
                            Quantity Purchased
                        </div>
                        <div style={{float: "right", marginTop:10}}>
                            5
                        </div>
                        <div style={{float: "left", marginLeft:20, marginTop:10}}>
                            Total cost:
                        </div>
                        <div style={{float: "right", marginTop:10}}>
                            $250
                        </div>
                        <div style={{float: "left", marginLeft:20, marginTop:10}}>
                            Your Total Shares
                        </div>
                        <div style={{float: "right", marginTop:10}}>
                            5
                        </div>
                        <div style={{float: "left", marginLeft:20, marginTop:10}}>
                            Your Total Investment
                        </div>
                        <div style={{float: "right", marginTop:10}}>
                            $250
                        </div>
                        <div style={{float: "left", marginLeft:20, marginTop:10}}>
                            Streams to Pay Investment
                        </div>
                        <div style={{float: "right", marginTop:10}}>
                            234m
                        </div>
                        <div style={{float: "left", marginLeft:20, marginTop:10}}>
                            Artist Streams Last year
                        </div>
                        <div style={{float: "right", marginTop:10}}>
                            340m
                        </div>
                        <div style={{float: "left", marginLeft:20, marginTop:10}}>
                            Account Cash Balance
                        </div>
                        <div style={{float: "right", marginTop:10}}>
                            $1000
                        </div>
                    </div>
                    <div class="rowDivCB2">
                        <Link to="/connect" style={{color: 'black', textDecoration: 'none'}}>
                        <div class="buttonCB" onClick={artistPage}>
                            <div>
                                <div class="divStrongCB4" >
                                    <strong class="strongCB10">
                                        Similar Artists
                                    </strong>
                                </div>
                            </div>
                        </div>
                        </Link>
                        <Link to="/existingArtist" style={{color: 'black', textDecoration: 'none'}}>
                        <div class="buttonCB1" style={{color: 'black', textDecoration: 'none'}}>
                                <div>
                                    <div class="divStrongCB4">
                                        <strong class="strongCB10">
                                            Artist page
                                        </strong>
                                    </div>
                                </div>
                        </div>
                        </Link>
                        <Link to="/" style={{color: 'black', textDecoration: 'none'}}>
                        <div class="buttonCB2">
                        <div class="divStrongCB4">
                                <div>
                                <strong class="strongCB10">
                                        Home page
                                    </strong>
                                </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};