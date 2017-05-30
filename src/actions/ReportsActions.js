var request = require('superagent');

export const GETBASIC_REQUEST = 'GETBASIC_REQUEST'
export const GETBASIC_SUCCESS = 'GETBASIC_SUCCESS'
export const GETBASIC_FAILURE = 'GETBASIC_FAILURE'

var getBasicReportRequest = ()=>
{
  return {
    type: GETBASIC_REQUEST,
    isFetching: true
  }
}

var getBasicReportSuccess = (report)=>
{
  return {
    type: GETBASIC_SUCCESS,
    isFetching: false,    
    report
  }
}

var getBasicReportError = (message) =>
{
  return {
    type: GETBASIC_FAILURE,
    isFetching: false,
    message
  }
}

export let getBasicReport = () => {
  return dispatch => {
        /*return new Promise((resolve, reject) => { 
            request.post('http://localhost:5000/api/Report/getbasicreport')
            .set('Content-Type', 'application/json; charset=utf-8')
            .set('Authorization', 'bearer '+ localStorage.getItem('id_token'))
            .end(function (err, res){
            if (err)
            {
                reject(err);
            }
            else
            {
                dispatch(getBasicReportSuccess(res.body));  
            }

            });
        });*/
        if (localStorage.getItem('id_token'))
        {
          var report = [
            {id:1, numberofcalls:2, status:'full'}, 
            {id:2, numberofcalls:2, status:'full'}, 
            {id:3, numberofcalls:2, status:'partial'}
          ];
          dispatch(getBasicReportSuccess(report));  
        }
      }
}
