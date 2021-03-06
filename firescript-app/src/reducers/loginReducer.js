import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/loginAction'

import jwt from 'jsonwebtoken'

const initialState = {
  error: '',
  isLoggedIn: false,
  isLoggingIn: false,
  token: localStorage.getItem('token'),
  user: jwt.decode(localStorage.getItem('token')),
}

export const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        error: '',
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.data.token,
        isLoggingIn: false,
        isLoggedIn: true,
        error: '',
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: 'FAILED to login',
      }
    default:
      return state
  }
}