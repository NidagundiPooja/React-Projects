export const addMovies = 'ADD_MOVIES'

export const ADD_MOVIES = (movies)=>{
    return {
        type: 'ADD_MOVIES',
        payload:movies
    }
}

export const remove_movie = (id)=>{
    return{
        type: 'REMOVE_MOVIES',
        payload:id
    }
}