export const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
export const END_DATA_REQUESTED = "END_DATA_REQUESTED";
export const GET_DATA_DONE = 'GET_DATA_DONE';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_FAILED = 'USER_SIGNIN_FAILED';

export function getDataRequested() {
    return {
      type: GET_DATA_REQUESTED
    };
  }

  export function getDataDone(data) {
    return {
      type: GET_DATA_DONE,
      payload: data
    };
  }
  export function endRequest() {
    return {
        type: END_DATA_REQUESTED
    }
  }
  export function getDataFailed(error) {
    return {
      type: GET_DATA_FAILED,
      payload: error
    };
  }

  export function signInSuccess(user) {
    return {
      type: USER_SIGNIN_SUCCESS,
      payload: user
    };
  }

  export function signInFailed(message) {
    return {
      type: USER_SIGNIN_FAILED,
      payload: message
    };
  }

