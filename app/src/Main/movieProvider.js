import  React, {useState, createContext}  from 'react';

export const MovieContext = createContext();

export function MovieProvider(props){
    const [data, changeData] = useState([])
    
    return (
        <MovieContext.Provider value={[data, changeData]}>
            {props.children}
        </MovieContext.Provider>
    );
}