import React from 'react'
import "./orderdetails.css"
import { Link } from 'react-router-dom';

export default function orderdetails() {
    let currentShares = 10;
    let currentTotalInvestment = 422.70;
    return (
        <div id="myDialogOD">
          <dialog class="dialogOD" open>
              <div >
                <div class="horDivOD">
                    <div class="divStrongOD1">
                        <strong class="strongOD1">
                            phonic
                        </strong>
                        <strong class="strongOD2">
                            house
                        </strong>
                    </div>
                </div>
                <div class="horDivOD2">
                    <div class="divStrongOD2">
                            <span class="strongOD3">
                                Investing in: 
                            </span>
                            <strong class="strongOD4">
                                New Artist
                            </strong>
                    </div>
                    <div class="divStrongOD3">
                            <span class="strongOD5">
                                Current Share price: 
                            </span>
                            <strong class="strongOD6">
                                $5
                            </strong>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", flex: "row"}}>
            <div style={{marginLeft:15,marginTop: 50,fontSize: 12}}>
                You Currently have: {currentShares} Shares
            </div>

            <div style={{marginLeft:95,marginTop: 50,fontSize: 12}}>
                Current Total Investment: ${currentTotalInvestment}
            </div>
            </div>

            <div style={{display: "flex", flex: "row"}}>
            <div style={{fontWeight: 800 , marginLeft:15,marginTop: 50,fontSize: 12}}>
                Submit Offer For:
            </div>            <input min="0" type="number" style={{fontWeight: 800,textAlign: 'center' ,marginTop: 47, marginLeft:7,width: 40,height:15,borderRadius: "15px"}}></input>
            <div style={{fontWeight: 800 , marginLeft:5,marginTop: 50,fontSize: 12}}>
                Shares
            </div> 
            <div style={{fontWeight: 800 , marginLeft: 15,marginTop: 0,fontSize: 12}}>
                Max Price to Pay(per share): $
                <input min="0" type="number" style={{fontSize:12 ,fontWeight: 800, textAlign: 'center' ,marginTop: 47, marginLeft:7,width: 50,height:15,borderRadius: "15px"}}></input>
            </div>
            </div>

            <div style={{display: "flex", flex: "row"}}>
            <div style={{marginLeft:15,marginTop: 100,fontSize: 12}}>
                Total Cost if Filled:
            </div>

            <div style={{position: 'absolute' ,marginLeft:280,marginTop: 100,fontSize: 12}}>
                ${currentTotalInvestment}
            </div>
            <Link to="/artistData" style={{color: "black" , textDecoration: 'none' }}>
            <div class="buttonOD" >
                <div class="divStrongOD4" >
                    <strong class="strongOD10">
                        View Artist Data
                    </strong>
                </div>
            </div>
            </Link>
            </div>

            <div style={{display: "flex", flex: "row"}}>
            <div style={{marginLeft:15,marginTop: 20,fontSize: 12}}>
                Resulting Account Cash Balance:
            </div>

            <div style={{position: 'absolute' ,marginLeft:280,marginTop: 20,fontSize: 12}}>
                ${`1,498.72`}
            </div>
            <Link to="/congratulationBox" style={{color: "black" , textDecoration: 'none' }}>
            <div class="abuttonOD1" >
                <div class="divStrongOD4" >
                    <strong class="strongOD10">
                        Confirm Order
                    </strong>
                </div>
            </div>
            </Link>
            </div>


            <div style={{display: "flex", flex: "row"}}>
            <div style={{marginLeft:15,marginTop: 20,fontSize: 12}}>
                Streams to Pay Back Investment:
            </div>

            <div style={{position: 'absolute' ,marginLeft:280,marginTop: 20,fontSize: 12}}>
                {`234m`}
            </div>
            <Link to="/newArtist" style={{color: "black" , textDecoration: 'none' }}>
            <div class="abuttonOD2" >
                <div class="divStrongOD5" >
                    <i class="strongOD10">
                        Cancel And Return
                    </i>
                </div>
            </div>
            </Link>
            </div>

            <div style={{display: "flex", flex: "row"}}>
            <div style={{marginLeft:15,marginTop: 20,fontSize: 12}}>
                Artist Streams Last Year:
            </div>

            <div style={{position: 'absolute' ,marginLeft:280,marginTop: 20,fontSize: 12}}>
                {`340m`}
            </div>
            </div>

            </dialog>
        </div>
    )
}
