import {createStore , applyMiddleware , combineReducers} from 'redux'
import  thunk from 'redux-thunk'

import {fetchImageReducer} from './reducers/fetchImageReducer'

const middleWare = applyMiddleware(thunk)

const rootReducer = combineReducers({
    fetchImagesData: fetchImageReducer
})

export const store = createStore(rootReducer, middleWare)