var request = require('superagent');

/******************************Login Related Actions***********************************************/
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
/**Login Actions*/
function loginRequest(loginCredentials) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    loginCredentials
  }
}

function loginSuccess(loginResponse) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    loginResponse
  }
}

function loginFailure(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    message
  }
}

/**Login Actions Ends */
export function loginUser(loginCredentials) {

  return dispatch => {

        return new Promise((resolve, reject) => {
        dispatch(loginRequest(loginCredentials));
        request.post('http://localhost:5000/api/user/login/email')
        .set('Content-Type', 'application/json; charset=utf-8')
        .send({'email':loginCredentials.username,'password':loginCredentials.password})
        .end(function (err, res){
          if (err)
          {
            dispatch(loginFailure("ERROR"));
            reject(err);
          }
          else
          {
             if (res.body.result == 3)
             {
                localStorage.setItem('id_token', res.body.token)
                dispatch(loginSuccess(res.body))
                dispatch(getUser());   
                resolve(res);
             }
             else
             {
                dispatch(loginFailure("Either Username or password is wrong")); 
                reject("Error");
             }
          }

        });
        });
    }
}


// Three possible states for our logout process as well.
// Since we are using JWTs, we just need to remove the token
// from localStorage. These actions are more useful if we
// were calling the API to log the user out
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true
  }
}

function logoutFailure(message) {
  return {
    type: LOGOUT_FAILURE,
    isFetching: false,
    message
  }
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(logoutRequest())
    try
    {
        localStorage.removeItem('id_token');
        dispatch(logoutSuccess())
    }
    catch(e)
    {
        dispatch(logoutFailure(e.message));
    }
  }
}

/*******************************************************ENDS LOGOUT ACTIONS WITH THE ACTION DISPATCHERS******************************/




/*****************************USER RELATED ACTIONS AND ITS ACTION CREATORS */

export const GETUSER_REQUEST = 'GETUSER_REQUEST'
export const GETUSER_SUCCESS = 'GETUSER_SUCCESS'
export const GETUSER_FAILURE = 'GETUSER_FAILURE'
export const UPDATEUSER_REQUEST = 'UPDATEUSER_REQUEST'
export const UPDATEUSER_SUCCESS = 'UPDATEUSER_SUCCESS'
export const UPDATEUSER_FAILURE = 'UPDATEUSER_FAILURE'

var getUserError = (message) =>
{
  return {
    type: GETUSER_FAILURE,
    isFetching: false,
    message
  }
}

var fetchUser = ()=>
{
  return {
    type: GETUSER_REQUEST,
    isFetching: true
  }
}

var receiveUser = (user)=>
{
  return {
    type: GETUSER_SUCCESS,
    isFetching: false,    
    user
  }
}

export let getUser = () => {

  return dispatch => {

        return new Promise((resolve, reject) => {
          
        request.get('http://localhost:5000/api/User/getuser')
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'bearer '+ localStorage.getItem('id_token'))
        .end(function (err, res){
          if (err)
          {
              localStorage.removeItem('id_token');
              dispatch(logoutSuccess())
              reject(err);
          }
          else
          {
             if (res.status == 401)
             {
                localStorage.removeItem('id_token');
                dispatch(logoutSuccess())
             }
             else
             {
                dispatch(receiveUser(res.body));  
             }
          }

        });

        });
      }
}

var errorUpdateUser = (message) =>
{
  return {
    type: UPDATEUSER_FAILURE,
    isFetching: false,
    message
  }
}

var requestUpdateUser = ()=>
{
  return {
    type: UPDATEUSER_REQUEST,
    isFetching: true
  }
}

var receiveUpdateUser = (user)=>
{
  return {
    type: UPDATEUSER_SUCCESS,
    isFetching: false,    
    user
  }
}

let updateRequestMapper = (user) =>
{
   return {
      Name: user.name,
      AddressLine1: user.addressline1,
      AddressLine2: user.addressline2,
      Country : user.country,
      City: user.city,
      State: user.state,
      ZipCode: user.zipcode,
      Telephone: user.telephone, 
      DOB : user.dob
   };
}

export function updateUser(user) {

  return dispatch => {

        return new Promise((resolve, reject) => {
        dispatch(requestUpdateUser());
        request.post('http://localhost:5000/api/user/updatecontact')
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'bearer '+ localStorage.getItem('id_token'))
        .send(updateRequestMapper(user))
        .end(function (err, res){
          if (err)
          {
            dispatch(errorUpdateUser("ERROR"));
            reject(err);
          }
          else
          {
             if (res.status == 200)
             {
                dispatch(receiveUpdateUser(user));  
                resolve(res);
             }
             else
             {
                dispatch(errorUpdateUser("Some Error Occured while updating the User")); 
                reject("Error");
             }
          }
        });

        });
    }
}