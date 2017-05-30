import {
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  GETUSER_REQUEST,
  GETUSER_SUCCESS,
  GETUSER_FAILURE, 
  UPDATEUSER_REQUEST,
  UPDATEUSER_SUCCESS,
  UPDATEUSER_FAILURE
} from '../actions/UserActions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function UserReducer(state={}, action) 
{
    switch (action.type) 
    {
            case LOGIN_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: true,
                user: action.loginCredentials,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case LOGIN_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                user: action.loginResponse
            })

            case LOGIN_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: false,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })

            case LOGOUT_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching : action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case LOGOUT_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                user : undefined
            })
            
            case LOGOUT_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching : action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message

            })

            case GETUSER_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case GETUSER_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching : action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                user : action.user
            })
            
            case GETUSER_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })

            case UPDATEUSER_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case UPDATEUSER_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                user: action.user
            })

            case UPDATEUSER_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })

            default:
            return  Object.assign({}, state,
            {
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                type:  action.type
            });
    }
};

export default UserReducer;