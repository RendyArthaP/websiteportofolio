import {
  GET_PORTOFOLIO_REQUEST,
  GET_PORTOFOLIO_SUCCESS,
  GET_PORTOFOLIO_ERROR
} from '../Actions/Portofolio.Actions.js'

const initialState = {
  data: []
}

const handlePortofolio = (state = initialState, action) => {
  switch(action.type) {
    case GET_PORTOFOLIO_REQUEST:
      return {
        ...state
      }
    case GET_PORTOFOLIO_SUCCESS:
      return {
        ...state,
        data: action.result
      }
    case GET_PORTOFOLIO_ERROR:
      return {
        ...state,
        error: action.error
      }
    default: 
      return state    
  }
}

export default handlePortofolio