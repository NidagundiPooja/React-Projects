import React from'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './app'
import { Provider } from 'react-redux'
import configureStore from './store/config'

const store = configureStore()
console.log(store)

store.subscribe(()=>{
    console.log('updated state',store.getState)
})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)