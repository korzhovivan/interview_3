import React from 'react';
import './explore.css'

export default function Explore(){
    return(
        <div className="explore">
            <div className="exploreText">
                Explore Movies & Series
            </div>
            <div className="input-group  my-input-group">
                <input type="text" className="form-control my-style-input" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary my-style-button" type="button" id="button-addon2">
                    <img src={"https://img.icons8.com/android/24/000000/search.png"}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
