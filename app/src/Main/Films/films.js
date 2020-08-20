import React, {Component, useContext} from 'react';
import './films.css' 
import { MovieContext } from './../movieProvider';
import Film from './Film/film';



export default function Films(){

    const [data, changeData] = useContext(MovieContext);
    console.log("DAta"+data);

    if(data.length === 0){
        return (
            <div class="alert alert-danger" style={{ margin: '0 auto',marginTop: '15px', width: '80%'}}>
                No films! Try to find.
            </div>
        )
    }else{
        return(
            <div className="films-container">
                    {data.map((item, index) => (
                        <Film key={index} item={item}/>
                    ))}
            </div>
        )
    }

    
}
