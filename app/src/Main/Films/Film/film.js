import  React from 'react';
import './film.css'


export default function Film(props){
    const item = props.item;
    return(
        <div className="film" style={{backgroundImage: `url(${item.Poster})`}}>
            <div className="description-film">
                <p>{item.Type}</p>
                <p>{item.Year}</p>
            </div>
        <span className="title">{item.Title}</span>
        </div>
    )
}