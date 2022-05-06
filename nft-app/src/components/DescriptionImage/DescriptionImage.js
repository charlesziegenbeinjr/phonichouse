import React from "react";
import "./DescriptionImage.css";

export default function DescriptionImage() {
    return(
        <div class="rowDI">
            <div class="squareDI">
                <h2 class="heading1D1">
                    Artists talk about their takes on potential for XXL's 2022 Freshmen Class
                </h2>
                <h5 class="heading1D2">
                    Several PhonicHouse seems to be in the running, and they have got the momentum to pull it off
                    - but it is a competitive arena. See what the artists have to say about their expectations for the next year of the 
                    rising rappers.
                </h5>
            </div>
            <div class="triangleDI">
            </div>
            <div class="imageDI">
                <div class="placeholderDI">
                    <img 
                        class="picDI"
                        src="https://i.ytimg.com/vi/hMPtYB7MfA8/maxresdefault.jpg"
                    />
                </div>
            </div>
        </div>
    );
};