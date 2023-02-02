import React from "react";
import North from './Images/1.png';
import South from './Images/2.png';
import './HemisphereDisplay.css';

const HemisphereDisplay = ({latitude,longitude}) => {
    const hemi = latitude>0 ? 'You are in Northern Hemisphere' : 'You are in Southern Hemisphere';
    const pic = latitude>0 ? North : South;
    //const hemilong = longitude>0 ? 'East':'West';
    return(
        <div>
            <img src={pic} alt="" />
            <div className="text">
                Latitude :{latitude} <br/>
                Longitude :{longitude} <br/>
                {hemi}</div>
        </div>
    )
}

export default HemisphereDisplay;