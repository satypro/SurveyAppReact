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

function SurveyReducer(state={}, action) 
{
    switch (action.type) 
    {
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

export default SurveyReducer;