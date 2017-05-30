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

import {
    GETCAMPAIGN_REQUEST,
    GETCAMPAIGN_SUCCESS,
    GETCAMPAIGN_FAILURE,
    CREATECAMPAIGN_REQUEST,
    CREATECAMPAIGN_SUCCESS,
    CREATECAMPAIGN_FAILURE,
    UPDATECAMPAIGN_REQUEST,
    UPDATECAMPAIGN_SUCCESS,
    UPDATECAMPAIGN_FAILURE,
    GETCAMPAIGNLIST_REQUEST,
    GETCAMPAIGNLIST_SUCCESS,
    GETCAMPAIGNLIST_FAILURE
} from '../actions/CampaignActions'

import{
GETBASIC_REQUEST,
GETBASIC_SUCCESS,
GETBASIC_FAILURE
} from '../actions/ReportsActions'


import {
CREATESURVEY_REQUEST,
CREATESURVEY_SUCCESS,
CREATESURVEY_FAILURE,
UPDATESURVEY_REQUEST,
UPDATESURVEY_SUCCESS,
UPDATESURVEY_FAILURE,
GETSURVEY_REQUEST,
GETSURVEY_SUCCESS,
GETSURVEY_FAILURE,
GETSURVEYLIST_REQUEST,
GETSURVEYLIST_SUCCESS,
GETSURVEYLIST_FAILURE,
SCHEDULESURVEY_REQUEST,
SCHEDULESURVEY_SUCCESS,
SCHEDULESURVEY_FAILURE,
EXECUTESURVEY_REQUEST,
EXECUTESURVEY_SUCCESS,
EXECUTESURVEY_FAILURE
} from '../actions/SurveyActions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function Reducer(state={}, action) 
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

              case CREATECAMPAIGN_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case CREATECAMPAIGN_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                campaign: action.campaign
            })

            case CREATECAMPAIGN_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })

            case UPDATECAMPAIGN_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case UPDATECAMPAIGN_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                campaign: action.campaign
            })

            case UPDATECAMPAIGN_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })
            

            case GETCAMPAIGNLIST_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case GETCAMPAIGNLIST_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                campaigns: action.campaigns
            })

            case GETCAMPAIGNLIST_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })

            case GETCAMPAIGN_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case GETCAMPAIGN_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                campaign: action.campaign
            })

            case GETCAMPAIGN_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })

             case GETBASIC_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case GETBASIC_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching : action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                report : action.report
            })
            
            case GETBASIC_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })

             case CREATESURVEY_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case CREATESURVEY_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                survey: action.survey
            })

            case CREATESURVEY_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })

            case UPDATESURVEY_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case UPDATESURVEY_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                survey: action.survey
            })

            case UPDATESURVEY_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })
            
            case GETSURVEY_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case GETSURVEY_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                survey: action.survey
            })

            case GETSURVEY_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })

            case GETSURVEYLIST_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case GETSURVEYLIST_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                surveys: action.surveys
            })

            case GETSURVEYLIST_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })

            case SCHEDULESURVEY_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case SCHEDULESURVEY_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                scheduleSurveyResponse: action.scheduleSurveyResponse
            })

            case SCHEDULESURVEY_FAILURE:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                errorMessage: action.message
            })

            case EXECUTESURVEY_REQUEST:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false
            })

            case EXECUTESURVEY_SUCCESS:
            return Object.assign({}, state,
            {
                type: action.type,
                isFetching: action.isFetching,
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                executeSurveyResponse: action.executeSurveyResponse
            })

            case SCHEDULESURVEY_FAILURE:
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

export default Reducer;