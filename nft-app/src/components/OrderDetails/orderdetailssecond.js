import { red } from '@mui/material/colors'
import React from 'react'
import "./orderdetails2.css"
import BarGraphSmall from '../BarGraphSmall/BarGraphSmall'
import { Link } from 'react-router-dom'

export default function orderdetailssecond() {
    return (
        <div id="myDialogOS">
          <dialog class="dialogOS" open>
              <div >
                <div class="horDivOS">
                    <div class="divStrongOS1">
                        <strong class="strongOS1">
                            phonic
                        </strong>
                        <strong class="strongOS2">
                            house
                        </strong>
                    </div>
                </div>
                <div class="horDivOS2">
                    <div class="divStrongOS2">
                            <span class="strongOS3">
                                Artist Data: 
                            </span>
                            <strong class="strongOS4">
                                New Artist
                            </strong>
                    </div>
                    <div class="divStrongOS3">
                            <span class="strongOS5">
                                Current Share price: 
                            </span>
                            <strong class="strongOS6">
                                $42
                            </strong>
                            
                    </div>
                    <div className='divStrongOS6'>
                        <div className='marketcapOS1'>
                             Market Cap: $ 4,227,591
                        </div>
                        <div className='marketcapOS2'>
                            + 0.86% Today
                        </div>
                        <div className='marketcapOS3'>
                            + 7.23% YTD
                        </div>
                        <div className='marketcapOS4'>
                            Bid: $42.20
                        </div>
                        <div className='marketcapOS5'>
                            Ask: $42.34
                        </div>
                        
                    </div>
                    
                </div>
                <div style={{display: "flex", flex: "row"}}>
                <div style={{marginLeft: 40,marginTop: 40,fontSize: 10,width: 250}}>
                Bought Today:  35,172
                </div>

                <div style={{marginLeft:40,marginTop: 40,fontSize: 10,width: 250}}>
                1-Year Profit  : 4.54%
                </div>
                </div>

                <div style={{display: "flex", flex: "row"}}>
                <div style={{marginLeft: 40,marginTop: 30,fontSize: 10,width: 250}}>
                Shares Outstanding : 100,000
                </div>

                <div style={{marginLeft:40,marginTop: 30,fontSize: 10,width: 250}}>
                1-Year Revenue Earned :  $7.48M
                </div>
                </div>
                <div style={{display: "flex", flex: "row"}}>
                <div style={{marginLeft: 40,marginTop: 30,fontSize: 10,width: 250}}>
                Earnings Date : January 16th
                </div>

                <div style={{marginLeft:40,marginTop: 30,fontSize: 10,width: 250}}>
                1-Year Stream Growth : +105%
                </div>
                </div>
                <div style={{display: "flex", flex: "row"}}>
                <div style={{marginLeft: 40,marginTop: 30,fontSize: 10,width: 250}}>
                Last Quarterly Payout per Share : $1.09
                </div>

                <div style={{marginLeft:40,marginTop: 30,fontSize: 10,width: 250}}>
                1-Year Listeners Growth : +82%
                </div>
                </div>
                <div style={{marginLeft: 30}}>
                    <BarGraphSmall/>
                </div>
                <div class="buttonOS" >
                <Link to="/newArtist" style={{color: "black" , textDecoration: 'none' }}>
                <div class="divStrongOS4" >
                    <strong class="strongOS10">
                        Go To Artist Page
                    </strong>
                </div>
                </Link>
                <Link to="/placeOrder" style={{color: "black" , textDecoration: 'none' }}>
                <div class="abuttonOS1" >
                <div class="divStrongOS4" >
                    <strong class="strongOS10">
                        Back To Order
                    </strong>
                </div>
                </div>
                </Link>
            </div>
            </div>
              
          </dialog>

        </div>
    )
}


// <strong class="marketcapOS">
// Market Cap: $ 4,227,591
// </strong>