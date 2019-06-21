export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_ENDED = 'REQUEST_ENDED';
export const END_DATA_REQUESTED = "END_DATA_REQUESTED";
export const GET_DATA_DONE = 'GET_DATA_DONE';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_FAILED = 'USER_SIGNIN_FAILED';

export function requestStarted() {
    return {
      type: REQUEST_STARTED
    };
  }
  
  export function requestEnded() {
    return {
        type: REQUEST_ENDED
    }
  }
  

  export function signInSuccess(user) {
    return {
      type: USER_SIGNIN_SUCCESS,
      payload: user
    };
  }

  export function signInFailed(error) {
    return {
      type: USER_SIGNIN_FAILED,
      payload: error
    };
  }

