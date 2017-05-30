var request = require('superagent');

export const CREATESURVEY_REQUEST = 'CREATESURVEY_REQUEST'
export const CREATESURVEY_SUCCESS = 'CREATESURVEY_SUCCESS'
export const CREATESURVEY_FAILURE = 'CREATESURVEY_FAILURE'

export const UPDATESURVEY_REQUEST = 'UPDATESURVEY_REQUEST'
export const UPDATESURVEY_SUCCESS = 'UPDATESURVEY_SUCCESS'
export const UPDATESURVEY_FAILURE = 'UPDATESURVEY_FAILURE'

export const GETSURVEY_REQUEST = 'GETSURVEY_REQUEST'
export const GETSURVEY_SUCCESS = 'GETSURVEY_SUCCESS'
export const GETSURVEY_FAILURE = 'GETSURVEY_FAILURE'

export const GETSURVEYLIST_REQUEST = 'GETSURVEYLIST_REQUEST'
export const GETSURVEYLIST_SUCCESS = 'GETSURVEYLIST_SUCCESS'
export const GETSURVEYLIST_FAILURE = 'GETSURVEYLIST_FAILURE'

export const SCHEDULESURVEY_REQUEST = 'SCHEDULESURVEY_REQUEST'
export const SCHEDULESURVEY_SUCCESS = 'SCHEDULESURVEY_SUCCESS'
export const SCHEDULESURVEY_FAILURE = 'SCHEDULESURVEY_FAILURE'

export const EXECUTESURVEY_REQUEST = 'EXECUTESURVEY_REQUEST'
export const EXECUTESURVEY_SUCCESS = 'EXECUTESURVEY_SUCCESS'
export const EXECUTESURVEY_FAILURE = 'EXECUTESURVEY_FAILURE'

var createSurveyRequest = () =>{
  return {
    type: CREATESURVEY_REQUEST,
    isFetching : true
  }
}

var createSurveySuccess = (survey) =>{
  return {
    type: CREATESURVEY_SUCCESS,
    isFetching : false,
    survey
  }
}

var createSurveyFailure = (message) =>{
  return {
    type: CREATESURVEY_FAILURE,
    isFetching : false,
    message
  }
}

export let createSurvey = (survey)=> {

  return dispatch => {
     return new Promise((resolve, reject) => {
        dispatch(createSurveyRequest());
        request.post('http://localhost:5000/api/Survey/create')
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'bearer '+ localStorage.getItem('id_token'))
        .send({
                "campaignId": survey.campaignId,
                "surveyName": survey.surveyName,
                "audiences": survey.audiences,
                "questions": survey.questions
        })
        .end(function (err, res){
          if (err)
          {
            dispatch(createSurveyFailure("ERROR"));
            reject(err);
          }
          else
          {
             if (res.body)
             {
                dispatch(createSurveySuccess(res.body))  
                resolve(res.body);
             }
             else
             {
                dispatch(createSurveyFailure("Error")); 
                reject("Error");
             }
          }

        });
      });
  }
}


var updateSurveyRequest = () =>{
  return {
    type: UPDATESURVEY_REQUEST,
    isFetching : true
  }
}

var updateSurveySuccess = (survey) =>{
  return {
    type: UPDATESURVEY_SUCCESS,
    isFetching : false,
    survey
  }
}

var updateSurveyFailure = (message) =>{
  return {
    type: UPDATESURVEY_FAILURE,
    isFetching : false,
    message
  }
}

export let updateSurvey = (survey)=> {

  return dispatch => {
       return new Promise((resolve, reject) => {
        dispatch(updateSurveyRequest());
        request.post('http://localhost:5000/api/Survey/update')
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'bearer '+ localStorage.getItem('id_token'))
        .send({
                "surveyId": survey.surveyId,
                "surveyName": survey.surveyName,
                "audiences": survey.audiences,
                "questions": survey.questions
        })
        .end(function (err, res){
          if (err)
          {
            dispatch(updateSurveyFailure("ERROR"));
            reject(err);
          }
          else
          {
             if (res.body)
             {
                dispatch(updateSurveySuccess(res.body))  
                resolve(res.body);
             }
             else
             {
                dispatch(updateSurveyFailure("Error")); 
                reject("Error");
             }
          }

        });
      });
  }
}


var getSurveyRequest = () =>{
  return {
    type: GETSURVEY_REQUEST,
    isFetching : true
  }
}

var getSurveySuccess = (survey) =>{
  return {
    type: GETSURVEY_SUCCESS,
    isFetching : false,
    survey
  }
}

var getSurveyFailure = (message) =>{
  return {
    type: GETSURVEY_FAILURE,
    isFetching : false,
    message
  }
}

export let getSurvey = (surveyId) => {

    return dispatch => {

        return new Promise((resolve, reject) => {
        dispatch(getSurveyRequest());  
        request.get('http://localhost:5000/api/Survey/get')
        .query({surveyId: surveyId})
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'bearer '+ localStorage.getItem('id_token'))
        .end(function (err, res){
          if (err)
          {
            dispatch(getSurveyFailure("Error"));
            reject(err);
          }
          else
          {
              dispatch(getSurveySuccess(res.body));  
          }

        });

        });
  }
}



var getSurveyListRequest = () =>{
  return {
    type: GETSURVEYLIST_REQUEST,
    isFetching : true
  }
}

var getSurveyListSuccess = (surveys) =>{
  return {
    type: GETSURVEYLIST_SUCCESS,
    isFetching : false,
    surveys
  }
}

var getSurveyListFailure = (message) =>{
  return {
    type: GETSURVEYLIST_FAILURE,
    isFetching : false,
    message
  }
}

export let getSurveyList = (campaignId) => {

  return dispatch => {

        return new Promise((resolve, reject) => {
        dispatch(getSurveyListRequest());  
        request.get('http://localhost:5000/api/Survey/all')
        .query({campaignId: campaignId})
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'bearer '+ localStorage.getItem('id_token'))
        .end(function (err, res){
          if (err)
          {
            dispatch(getSurveyListFailure("Error"));
            reject(err);
          }
          else
          {
              dispatch(getSurveyListSuccess(res.body));  
          }

        });
        });
  }
}


var scheduleSurveyRequest = () =>{
  return {
    type: SCHEDULESURVEY_REQUEST,
    isFetching : true
  }
}

var scheduleSurveySuccess = (scheduleSurveyResponse) =>{
  return {
    type: SCHEDULESURVEY_SUCCESS,
    isFetching : false,
    scheduleSurveyResponse
  }
}

var scheduleSurveyFailure = (message) =>{
  return {
    type: SCHEDULESURVEY_FAILURE,
    isFetching : false,
    message
  }
}

export let scheduleSurvey = (surveyId)=> {

  return dispatch => {
     
  }
}



var executeSurveyRequest = () =>{
  return {
    type: EXECUTESURVEY_REQUEST,
    isFetching : true
  }
}

var executeSurveySuccess = (executeSurveyResponse) =>{
  return {
    type: EXECUTESURVEY_SUCCESS,
    isFetching : false,
    executeSurveyResponse
  }
}

var executeSurveyFailure = (message) =>{
  return {
    type: EXECUTESURVEY_FAILURE,
    isFetching : false,
    message
  }
}

export let executeSurvey = (surveyId)=> {

  return dispatch => {
     
  }
}