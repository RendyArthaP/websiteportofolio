import axios from 'axios';

export const GET_PORTOFOLIO_REQUEST = 'GET_PORTOFOLIO_REQUEST'
export const GET_PORTOFOLIO_SUCCESS = 'GET_PORTOFOLIO_SUCCESS'
export const GET_PORTOFOLIO_ERROR = 'GET_PORTOFOLIO_ERROR'

export const getPortoRequest = () => {
  return {
    type: GET_PORTOFOLIO_REQUEST
  }
}

export const getPortoSuccess = (result) => {
  return {
    type: GET_PORTOFOLIO_SUCCESS,
    result
  }
}

export const getPortoError = (error) => {
  return {
    type: GET_PORTOFOLIO_ERROR,
    error
  }
}

export const getPorto = () => {
  return function(dispatch) {
    dispatch(getPortoRequest())

    axios
      .get("https://backend-webportofolio.herokuapp.com/portofolio")
      .then((result) => dispatch(getPortoSuccess(result.data)))
      .catch((error) => dispatch(getPortoError(error)))
  }
}

