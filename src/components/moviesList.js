import React, {useState} from 'react'
import {Container, Row, Col, Card, Form}  from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { removeMovie } from '../actions/moviesActions'
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

const MoviesList = (props) =>{
    const movies = useSelector((state) => {
        return state.movies
    })
    const [search, setSearch] = useState('')
    const [filterItem, setFilterItem] = useState(movies)
    const [selected, setSelected] = useState('')
    const dispatch = useDispatch()

    const handleRemove = (id)=>{
        dispatch(removeMovie(id))
    }

    
    const handelSearch = (e) =>{
        const input = e.target.value
        // console.log(input);
        setSearch(input)
        const result = movies.filter(ele => {
            return ele.movieName.toLowerCase().includes(input.toLowerCase())
            }) 
            if(input.length > 0){
                setFilterItem(result);
            }
            // console.log('filter', result);
    }
  
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    

    const handleSelect = (e) => {
        const input = e.target.value
        setSelected(input)
    //    console.log(selected);
            movies.sort((a,b)=>{
               if(input === 'ase'){
                    if(a.movieName.toLowerCase() < b.movieName.toLowerCase()){
                        return -1
                    }
                }else if(input === 'dse'){
                    if(b.movieName.toLowerCase() < a.movieName.toLowerCase()){
                        return -1
                    }
                }else if(input === 'High'){
                   return b.rating - a.rating
                }else if(input === 'Low'){
                    return a.rating - b.rating
                }else{
                    return 0
                }
                return 0
            })  
    }

    return (
        <div>  
            <h1>Movies List</h1>
                <Row className='mt-4 mb-4'>
                    <Col md={8}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control type='text' placeholder='Search By Name...' value={search} onChange={handelSearch} />
                    </Form>
                    </Col>
                    <Col md={4}>
                    <Form.Select style={{ width: '10rem' }} value = {selected} onChange={handleSelect}>
                        <option >Order By</option>
                        <option value='ase'>A - Z</option>
                        <option value='dse'>Z - A</option>
                        <option value='High'>High to Low</option>
                        <option value='Low'>Low to High</option>
                    </Form.Select>
                    </Col>
                </Row>

            {movies.length === 0 ? <h3>No Movies Found</h3> :(
            
            <Container>
                <Row>
                    {(search.length > 0 ? filterItem : movies).map(ele => {
                        return (
                            <Col key={ele.id}  className='mt-4'>
                                <Card border="primary" style={{ width: '13rem' }}>
                                    <Card.Img variant="side" src="https://media.comicbook.com/files/img/default-movie.png" width='200' height='180'/>
                                    <Card.Body>
                                        <Card.Text>
                                               <b> Name - {ele.movieName}</b><br/>
                                                <b>IMDB #{ele.rating}</b>
                                        </Card.Text>
                                        <DeleteIcon sx={{ color: red[500] }} style={{float : 'right'}} onClick={()=>{handleRemove(ele.id)}}/>
                                         {/* <Button size='sm' variant='danger' style={{float : 'right'}} onClick={()=>{handleRemove(ele.id)}}> X </Button> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                        })}
                </Row>
            </Container> 
            )} 
        </div>
    )
}

export default MoviesList