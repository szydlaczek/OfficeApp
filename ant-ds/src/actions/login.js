
import * as action_types from './action_types'




  export function getData(credentials) {
    console.log(JSON.stringify(credentials));
    return dispatch => {
         
      // set state to "loading"
      dispatch(action_types.getDataRequested());
  
      fetch('http://localhost:54013/api/account/signin', {
          method: "POST",
          headers : {
            'Content-type' : 'application/json'
          },
          body: JSON.stringify(credentials)
      })
        .then((response) => {checkStatus(response, dispatch)})
        .then(data => {
          console.log(data); 
          dispatch(action_types.endRequest());
          dispatch(action_types.getDataDone(data));          
        })
        .catch(error => {
            console.log(error);
          // set state for error
          dispatch(action_types.getDataFailed(error));
        })
    }
  }
  const checkStatus = (response, dispatch) => {
    if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
        return response
    }
    if (response.status === 400) {
                console.log(response.json())
                dispatch(action_types.signInFailed("Te"))

    }
    
    else {
        var error = new Error(response.statusText)
        console.log(response);
        error.response = response
        return response
    }
  }