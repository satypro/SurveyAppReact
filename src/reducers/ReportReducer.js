import{
GETBASIC_REQUEST,
GETBASIC_SUCCESS,
GETBASIC_FAILURE
} from '../actions/ReportsActions'


function ReportReducer(state={}, action) 
{
    switch (action.type) 
    {
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

            default:
            return  Object.assign({}, state,
            {
                isAuthenticated: localStorage.getItem('id_token') ? true : false,
                type:  action.type
            });
    }
};

export default ReportReducer;