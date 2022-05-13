import React from "react";
import GraphCard from '../graphCard/graphCard';
import { Link } from "react-router-dom";
import './BigCard.css';

export default function BigCard() {
    
  return (
    <div class="cardBc">
    <h3 class="heading2Bc">Based on your Portfolio</h3>
    <div class="parentParentBc">
      <div>
        <div class="parentDivBc">
          <div class="childDivBc">
            <Link to="/existingArtist">
            <GraphCard 
                color="#12D7FE"
                txtColor="#FE1212"
                title="RB 500"
                delta="-4.08 (64%)"
            />
            </Link>
          </div>
          <div>
            <h5 class="heading1Bc">
              shareholder of similar investments to yours also viewed
            </h5>
          </div>
        </div>
      </div>
      <div>
        <div class="parentDivBc1">
          <div class="childDivBc">
          <Link to="/existingArtist">
            <GraphCard 
                color="#FE31F7"
                txtColor="#01FE5E"
                title="RB 500"
                delta="+4.08 (64%)"
            />
          </Link>
          </div>
          <div>
            <h5 class="heading1Bc">
              shareholder of similar investments to yours also viewed
            </h5>
          </div>
        </div>
      </div>
      <div>
        <div class="parentDivBc2">
          <div class="childDivBc">
          <Link to="/existingArtist">
            <GraphCard 
                color="#FFE633"
                txtColor="#01FE5E"
                title="RB 500"
                delta="+4.08 (64%)"
            />
          </Link>
          </div>
          <div>
            <h5 class="heading1Bc">
              shareholder of similar investments to yours also viewed
            </h5>
          </div>
        </div>
      </div>
      <div>
        <div class="parentDivBc3">
          <div class="childDivBc">
          <Link to="/existingArtist">
            <GraphCard 
                color="#01FE5E"
                txtColor="#01FE5E"
                title="RB 500"
                delta="+4.08 (64%)"
            />
          </Link>
          </div>
          <div>
            <h5 class="heading1Bc">
              shareholder of similar investments to yours also viewed
            </h5>
          </div>
        </div>
      </div>
      <div>
        <div class="parentDivBc4">
          <div class="childDivBc">
          <Link to="/existingArtist">
            <GraphCard 
                color="#FE31F7"
                txtColor="#FE1212"
                title="RB 500"
                delta="-4.08 (64%)"
            />
          </Link>
          </div>
          <div>
            <h5 class="heading1Bc">
              shareholder of similar investments to yours also viewed
            </h5>
          </div>
        </div>
      </div>
      <div>
        <div class="parentDivBc5">
          <div class="childDivBc">
          <Link to="/existingArtist">
            <GraphCard 
                color="#12D7FE"
                txtColor="#FE1212"
                title="RB 500"
                delta="-4.08 (64%)"
            />
          </Link>
          </div>
          <div>
            <h5 class="heading1Bc">
              shareholder of similar investments to yours also viewed
            </h5>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
