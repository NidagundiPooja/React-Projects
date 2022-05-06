const moviesInitialState = []

const moviesReducer = (state=moviesInitialState,action)=>{
    switch(action.payload)
        {
            case 'ADD_MOVIES': {
                return [...state,{...action.payload}]
            }
            case 'REMOVE_MOVIE' : {
                return state.filter((ele)=>{
                    return ele.id !== action.payload
                })
            }
            default : {
                return [...state]
            }
        }
}

export default moviesReducer