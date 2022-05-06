import {createStore,combineReducers,applyMiddleware} from 'redux'
import moviesReducer from '../reducers/moviesReducer'
import thunk from 'redux-thunk'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        movies:moviesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore