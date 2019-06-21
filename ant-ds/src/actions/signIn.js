
import * as action_types from './action_types'

 const signIn = (userData) => async dispatch => {  
         
      
      dispatch(action_types.requestStarted());
      try {
        const signInResponse = await fetch('http://localhost:54013/api/account/signin', {
          method: "POST",
            headers : {
              'Content-type' : 'application/json'
            },
            body: JSON.stringify(userData)
          })
          if (signInResponse.status>=200 && signInResponse.status<=300)
          {
            const user = await signInResponse.json();
            dispatch(action_types.requestEnded())
            dispatch(action_types.signInSuccess(user));
          }
          if (signInResponse.status ===400)
          {
            dispatch(action_types.requestEnded())
            const error = await signInResponse.json();
            dispatch(action_types.signInFailed(error))
          }
          
      }
      catch(exc) {
        console.log(exc)
      }
      
      
    }
  
    export default signIn;
  