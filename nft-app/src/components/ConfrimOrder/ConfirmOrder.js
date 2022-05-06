import React, { useState } from 'react';
import './ConfirmOrder.css';
import { useNavigate } from 'react-router-dom';
import BarGraphSmall from '../BarGraphSmall/BarGraphSmall';
import {Link} from 'react-router-dom';

export default function ConfirmOrder() {
    const navigate = useNavigate();
    function artistPage(){
        navigate('/');
    }
    // x.close()/
  return (
    <div id="myDialogCO">
      <dialog class="dialogCO" open>
          <div >
            <div class="horDivCO">
                <div class="divStrongCO1">
                    <strong class="strongCO1">
                        phonic
                    </strong>
                    <strong class="strongCO2">
                        house
                    </strong>
                </div>
            </div>
            <div class="horDivCO2">
                <div class="divStrongCO2">
                        <span class="strongCO3">
                            investing in: 
                        </span>
                        <strong class="strongCO4">
                            new artist
                        </strong>
                </div>
                <div class="divStrongCO3">
                        <span class="strongCO5">
                            Current Share price: 
                        </span>
                        <strong class="strongCO6">
                            $5
                        </strong>
                </div>
            </div>
            <div class="horDivCO3">
                <div class="horDivCO5">
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginLeft: 30, marginTop:20}}>
                            You currently have:
                        </div>
                        <div style={{marginLeft: 30, marginTop:20}}>
                            0
                        </div>
                        <div style={{marginLeft: 20, marginTop:20}}>
                            shares
                        </div>
                        <div style={{marginLeft: 60, marginTop:20}}>
                            Current Total Investment:
                        </div>
                        <div style={{marginLeft: 20, marginTop:20}}>
                            $0.00
                        </div>
                    </div>
                    <div style={{display: "flex", flex: "row"}}>
                        <strong style={{marginLeft: 30, marginTop:20}}>
                            Submit offer for:
                        </strong>
                        <input class="inputCO">
                            
                        </input>
                        <strong style={{marginLeft: 15, marginTop:20}}>
                            Shares:
                        </strong>
                        <strong style={{marginLeft: 53, marginTop:20}}>
                            Max price to Pay(per share):
                        </strong>
                        <div class="inputCO1">
                            <strong class="strongCOtemp">
                                $220
                            </strong>
                        </div>
                    </div>
                </div>
                <div class="horDivCO6">
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginLeft: 10, marginTop:40}}>
                                Total Cost if filled:
                        </div>
                        <div style={{marginLeft: 170, marginTop:40}}>
                                $250
                        </div>
                    </div>
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginLeft: 10, marginTop:10}}>
                                Resulting Account Cash Balance
                        </div>
                        <div style={{marginLeft: 70, marginTop:10}}>
                                $1000
                        </div>
                    </div>
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginLeft: 10, marginTop:10}}>
                                Streams To Pay Back Investment
                        </div>
                        <div style={{marginLeft: 70, marginTop:10}}>
                                234m
                        </div>
                    </div>
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginLeft: 10, marginTop:10}}>
                                Artist Streams last year
                        </div>
                        <div style={{marginLeft: 135, marginTop:10}}>
                                340m
                        </div>
                    </div>
                </div>
                <Link to="/congrats" style={{color: 'black', textDecoration: 'none'}}>
                    <div class="horDivCO7">
                        <div style={{marginTop:8, marginLeft:20}}>
                            <strong>
                                Confirm Order
                            </strong>
                        </div>
                    </div>
                </Link>
                <Link to="/" style={{color: 'black', textDecoration: 'none'}}>
                        <div class="horDivCO8">
                            <div style={{ marginLeft:30}}>
                                <strong class="strongCO">
                                    cancel & return
                                </strong>
                            </div>
                        </div>
                </Link>
            </div>
            <div class="horDivCO4">
                <div class="horDivCO9">
                    <div style={{marginTop: 35, marginLeft: 80}}>
                        <BarGraphSmall />
                    </div>
                </div>
                <div class="horDivCO10">
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginTop:40}}>
                                Shares Outstanding
                        </div>
                        <div style={{marginTop:40}}>
                                100,000
                        </div>
                    </div>
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginTop:10}}>
                                Earnings Date:
                        </div>
                        <div style={{marginTop:10}}>
                                January 16th
                        </div>
                    </div>
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginTop:10}}>
                                Last Quaterly Payout:
                        </div>
                        <div style={{marginTop:10}}>
                                1.09M   
                        </div>
                    </div>
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginTop:10}}>
                                1-Year Profit:
                        </div>
                        <div style={{marginTop:10}}>
                                4.54%
                        </div>
                    </div>
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginTop:10}}>
                                1-Year Revenue:
                        </div>
                        <div style={{marginTop:10}}>
                                $7.48M
                        </div>
                    </div>
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginTop:10}}>
                                1-Year Stream Growth:
                        </div>
                        <div style={{marginTop:10}}>
                                +75%
                        </div>
                    </div>
                    <div style={{display: "flex", flex: "row"}}>
                        <div style={{marginTop:10}}>
                                1-Year Litseners:
                        </div>
                        <div style={{marginTop:10}}>
                                +82%
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </dialog>
    </div>
  );
};