import React from 'react'
import MoviesForm from './moviesForm'
import MoviesList from './moviesList'
import MoviesStats from './moviesStats'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';

const moviesContainer = (props)=>{

    const movies = useSelector(state => state)

    return(
        <Box>
        <Container >
            <div className = 'text-center mt-3'>
                <h1>My Big Movie List</h1>
            </div>
            <Container className='mt-4'>
                <Row>
                    <Col sm={8}>
                        <MoviesList movies={movies}/>
                    </Col>
                    <Col sm={4}>
                        <MoviesForm/>
                        <div className='mt-5'>
                            <MoviesStats/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
        </Box>
    )
}

export default moviesContainer