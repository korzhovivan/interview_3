import React from 'react';
import './main.css'
import Explore from './Explore/explore';
import Films from './Films/films';
import {MovieProvider} from '../Main/movieProvider'

export default function Main(){
    return(
        <div className="main">
            <MovieProvider>
                <Explore />
                <Films />
            </MovieProvider>
        </div>
    )
}
