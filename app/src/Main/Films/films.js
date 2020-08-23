import React, {Component, useContext, useState} from 'react';
import './films.css' 
import { MovieContext } from './../movieProvider';
import Film from './Film/film';



export default function Films(){

    const [data, changeData] = useContext(MovieContext);
    
    const [pagination, changePagination] = useState({
        offset: 0,
        perPage: 6,
        pageCount: 0,
        dat: [],
        currentPage: 0,
       
    })
    pagination.pageCount = Math.ceil(data.length / pagination.perPage)

    pagination.dat = data.slice(pagination.offset, pagination.offset + pagination.perPage)

    function PaginationHandler(e){
            const currentPage= pagination.currentPage + e;
            if(currentPage >=0 && currentPage < pagination.pageCount){
                const offset = currentPage * pagination.perPage;
                const slice = data.slice(offset, offset + pagination.perPage)

                changePagination({
                    currentPage: currentPage,
                    offset: offset,
                    dat: slice,
                    perPage: pagination.perPage,
                    pageCount: pagination.pageCount
                })
            }
        
    }

    if(pagination.dat.length === 0){
        return (
            <div class="alert alert-danger" style={{ margin: '0 auto',marginTop: '15px', width: '80%'}}>
                No films! Try to find.
            </div>
        )
    }else{
        return(
            
            <>
                <div className="films-container">
                        {pagination.dat.map((item, index) => (
                            <Film key={index} item={item}/>
                        ))}
                </div>

                {data.length > pagination.perPage ? (
                    
                <div className="pagination">
                    <span>Items per page: {pagination.perPage}</span>
                    <span>{pagination.offset + 1} - {pagination.offset + pagination.perPage >= data.length ? data.length : pagination.offset + pagination.perPage} of {data.length}</span>

                    <span  style={{cursor: 'pointer'}}>
                        <span className="pag-but" onClick={()=> PaginationHandler(-1)} >&#60;prev</span>&nbsp;&nbsp;
                        <span className="pag-but" onClick={()=> PaginationHandler(1)} >next&#62;</span>
                    </span>
                    
                </div>
                ) : null}
                
                
            </>
        )
    }

    
}
