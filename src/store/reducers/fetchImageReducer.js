import {FETCH_IMAGE_FAILURE, FETCH_IMAGE_REQUEST , FETCH_IMAGE_SUCCESS} from '../constants'

const initialState = {
    isFetching: false,
    apiData : [],
    errorMessage: ""
}

export const fetchImageReducer = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_IMAGE_REQUEST :
            return {
                ...state,
                isFetching: true
            }
        case FETCH_IMAGE_SUCCESS: 
            return {
                ...state,
                isFetching: action.isFetching,
                apiData: action.payload
            }
        case FETCH_IMAGE_FAILURE: 
            return {
                ...state, 
                isFetching: false,
                errorMessage: action.payload
            }
        default : 
             return state
    }
}