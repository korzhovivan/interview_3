import React,{useContext, useState}  from 'react';
import './explore.css'
import { MovieContext } from './../movieProvider';

export default function Explore(){

    const [data, changeData] = useContext(MovieContext);
    const [value, changeValue] = useState('')

    function submitHandler(e){
        e.preventDefault()

        if(value.trim()){
            fetch('http://www.omdbapi.com/?apikey=1061bb3d&t='.concat(value))
            .then(response => response.json())
            .then((jsonData) => {
                
                if(jsonData.Error === "Movie not found!"){
                    alert("Movie not found!")
                }else{
                    changeData(last=>last.concat([jsonData]))
                }
                console.log([jsonData])
            })
            .catch((error) => {
                console.error(error)
            })
        }
    }

    return(
        <div className="explore">
            <div className="exploreText">
                Explore Movies & Series
            </div>
            <form onSubmit={submitHandler} className="input-group  my-input-group">
                <input onChange={(e)=>changeValue(e.target.value)} value={value} type="text" className="form-control my-style-input" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button type="submit" className="btn btn-outline-secondary my-style-button" id="button-addon2">
                    <img src={"https://img.icons8.com/android/24/000000/search.png"}/>
                    </button>
                </div>
            </form>
        </div>
    )
}
