import {FETCH_IMAGE_FAILURE, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_REQUEST} from '../constants'

export const fetchingImageRequest = () => {
    return {
        type: FETCH_IMAGE_REQUEST,
        isFetching: true
    }

}

export const fetchingImageSuccess = payload => {
    return {
        type: FETCH_IMAGE_SUCCESS,
        isFetching: false,
        payload
    }
}

export const fetchingImageError = error => {
    return {
        type: FETCH_IMAGE_FAILURE,
        isFetching: false ,
        payload: error
    } 
}

export const fetchImages = () => async dispatch => {
    dispatch(fetchingImageRequest())
    try {
        const response = await fetch (`https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`)
        const data = await response.json()
        dispatch(fetchingImageSuccess(data))
    } catch (e) {
        dispatch(fetchingImageError(e))
    }

}