import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {addMovies} from '../actions/moviesActions'
import {useDispatch} from 'react-redux'
import {Card, CardContent }from '@mui/material';



const MoviesForm = (props) =>{
    const [movieName, setMovieName] = useState('')
    const [rating, setRating] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e) =>{
        const input = e.target.value
        if(e.target.name === 'movieName') {
            setMovieName(input) 
        }else if(e.target.name === 'rating'){
            setRating((input))
        }
    }

    const handleSubmit=(e) =>{
        e.preventDefault();
         const formData = {
                id: Number(new Date()),
                movieName,
                rating: Number(rating)
            }
            dispatch(addMovies(formData))
            setMovieName('')
            setRating('')
    }

    return (
        <div>
           <Card>
               <CardContent>
                <h1>Add Movie</h1>
                    <Form  onSubmit={handleSubmit} className='mt-4' >
                        <Form.Group>
                            <Form.Control type='text' placeholder='Enter Movie Name' value={movieName} name='movieName' onChange={handleChange} required />
                            
                        </Form.Group><br/>
                        <Form.Group>
                            <Form.Control type='number' placeholder='IMDB rating' value={rating} name='rating' onChange={handleChange} required/>
                            
                        </Form.Group><br/>
                        <Button type='submit'>Add</Button>
                    </Form>
                </CardContent>
                </Card>
        </div>
    )
}

export default MoviesForm