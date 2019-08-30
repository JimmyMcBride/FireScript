import axios from 'axios'

import jwt from 'jsonwebtoken'

// Login
export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const login = creds => dispatch => {
  console.log('Login Creds: ', creds)
  dispatch({ type: LOGIN_START })
  return axios
    .post('localhost:5000/api/auth/login',
    creds)
    .then(res => {
        const token = res.data.token
        localStorage.setItem('token', token)
        const decodedToken = jwt.decode(token)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
            data: res.data,
            user: decodedToken,
            }
        })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}