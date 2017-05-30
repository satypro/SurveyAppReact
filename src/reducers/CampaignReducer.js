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

function SurveyReducer(state={}, action) 
{
    switch (action.type) 
    {
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

            default:
            return  Object.assign({}, state,
            {
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                type:  action.type
            });
    }
};

export default SurveyReducer;