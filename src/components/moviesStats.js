import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
//import {Card, CardContent}from '@mui/material';

const MoviesStats = (props) =>{
    const movies = useSelector((state) => {
        return state.movies
    })
    const [topRanked, setTopRanked] = useState(0)

    useEffect(() =>{
        if(movies.length>0){
            const result = movies.reduce((prev, current) => {
                // console.log('prev', prev.rating , 'cur', current.rating);
                return ((prev.rating > current.rating) ? prev : current)
            })
            // console.log('res', result);
            setTopRanked(Number(result.rating))
        }else{
            setTopRanked(0)
        }
    },[movies])
    
    // console.log(topRanked);
    return (
        <div>
            
           //<Card varient='outlined' color='dark'>
                <h2> Movie Stats</h2>
               //<CardContent>
                    <b>Total Movies - {movies.length}</b><br/><br/>
                    <b># Top Ranked Movie - {topRanked} </b>
                //</CardContent>
        //</Card>
        </div>
    )
}

export default MoviesStats