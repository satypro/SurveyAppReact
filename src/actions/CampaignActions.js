var request = require('superagent');

export const GETCAMPAIGN_REQUEST = 'GETCAMPAIGN_REQUEST'
export const GETCAMPAIGN_SUCCESS = 'GETCAMPAIGN_SUCCESS'
export const GETCAMPAIGN_FAILURE = 'GETCAMPAIGN_FAILURE'

export const GETCAMPAIGNLIST_REQUEST = 'GETCAMPAIGNLIST_REQUEST'
export const GETCAMPAIGNLIST_SUCCESS = 'GETCAMPAIGNLIST_SUCCESS'
export const GETCAMPAIGNLIST_FAILURE = 'GETCAMPAIGNLIST_FAILURE'

export const CREATECAMPAIGN_REQUEST = 'CREATECAMPAIGN_REQUEST'
export const CREATECAMPAIGN_SUCCESS = 'CREATECAMPAIGN_SUCCESS'
export const CREATECAMPAIGN_FAILURE = 'CREATECAMPAIGN_FAILURE'

export const UPDATECAMPAIGN_REQUEST = 'UPDATECAMPAIGN_REQUEST'
export const UPDATECAMPAIGN_SUCCESS = 'UPDATECAMPAIGN_SUCCESS'
export const UPDATECAMPAIGN_FAILURE = 'UPDATECAMPAIGN_FAILURE'


/*********************************GET CAMPAIGN*****************************************************/

var getCampaignRequest = () =>{
  return {
    type: GETCAMPAIGN_REQUEST,
    isFetching : true
  }
}

var getCampaignSuccess = (campaign) =>{
  return {
    type: GETCAMPAIGN_SUCCESS,
    isFetching : false,
    campaign
  }
}

var getCampaignFailure = (message) =>{
  return {
    type: GETCAMPAIGN_SUCCESS,
    isFetching : false,
    message
  }
}

export let getCampaign = (id)=> {

  return dispatch => {

        return new Promise((resolve, reject) => {
        dispatch(getCampaignRequest());  
        request.get('http://localhost:5000/api/Campaign')
        .query({campaignId: id})
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'bearer '+ localStorage.getItem('id_token'))
        .end(function (err, res){
          if (err)
          {
            dispatch(getCampaignFailure("Error"));
            reject(err);
          }
          else
          {
              dispatch(getCampaignSuccess(res.body));  
          }

        });

        });
  }
}


/*********************************GET CAMPAIGN LIST*************************************************/

var getCampaignListRequest = () => {
  return {
    type: GETCAMPAIGNLIST_REQUEST,
    isFetching: true
  }
}

var getCampaignListSuccess = (campaigns) => {
  return {
    type: GETCAMPAIGNLIST_SUCCESS,
    isFetching : false,
    campaigns
  }
}

var getCampaignListFailure = (message) => {
  return {
    type: GETCAMPAIGNLIST_FAILURE,
    isFetching: false,
    message
  }
}

export function getCampaignList() {

  return dispatch => {

        return new Promise((resolve, reject) => {
        dispatch(getCampaignListRequest());  
        request.get('http://localhost:5000/api/Campaign/all')
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'bearer '+ localStorage.getItem('id_token'))
        .end(function (err, res){
          if (err)
          {
            dispatch(getCampaignListFailure("Error"));
            reject(err);
          }
          else
          {
              dispatch(getCampaignListSuccess(res.body));  
          }

        });

        });
  }
}


/*********************************CREATE CAMPAIGN*************************************************/

var createCampaignRequest = () =>{
  return {
    type: CREATECAMPAIGN_REQUEST,
    isFetching : true
  }
}

var createCampaignSuccess = (campaign) =>{
  return {
    type: CREATECAMPAIGN_SUCCESS,
    isFetching : false,
    campaign
  }
}

var createCampaignFailure = (message) =>{
  return {
    type: CREATECAMPAIGN_FAILURE,
    isFetching : false,
    message
  }
}

export let createCampaign = (campaign)=> {

        return dispatch => {

        return new Promise((resolve, reject) => {
        dispatch(createCampaignRequest());
        request.post('http://localhost:5000/api/Campaign/create')
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'bearer '+ localStorage.getItem('id_token'))
        .send({
              "campaignName": campaign.campaignName,
              "campaignDescription": campaign.campaignDescription,
              "scheduledDate": campaign.scheduledDate,
              "scheduledStartTime": campaign.scheduledStartTime,
              "scheduledEndTime": campaign.scheduledEndTime
        })
        .end(function (err, res){
          if (err)
          {
            dispatch(createCampaignFailure("ERROR"));
            reject(err);
          }
          else
          {
             if (res.body)
             {
                dispatch(createCampaignSuccess(res.body))  
                resolve(res.body);
             }
             else
             {
                dispatch(createCampaignFailure("Error")); 
                reject("Error");
             }
          }

        });
      });
        }
}


/*********************************UPDATE CAMPAIGN*************************************************/
var updateCampaignRequest = () =>{
  return {
    type: UPDATECAMPAIGN_REQUEST,
    isFetching : true
  }
}

var updateCampaignSuccess = (campaign) =>{
  return {
    type: UPDATECAMPAIGN_SUCCESS,
    isFetching : false,
    campaign
  }
}

var updateCampaignFailure = (message) =>{
  return {
    type: UPDATECAMPAIGN_FAILURE,
    isFetching : false,
    message
  }
}

export function updateCampaign(campaign) {

  return dispatch => {

return new Promise((resolve, reject) => {
        dispatch(updateCampaignRequest());
        request.post('http://localhost:5000/api/Campaign/update')
        .set('Content-Type', 'application/json; charset=utf-8')
        .set('Authorization', 'bearer '+ localStorage.getItem('id_token'))
        .send({
              "CampaignId" : campaign.campaignId,
              "campaignName": campaign.campaignName,
              "scheduledDate": campaign.scheduledDate,
              "scheduledStartTime": campaign.scheduledStartTime,
              "scheduledEndTime": campaign.scheduledEndTime
        })
        .end(function (err, res){
          if (err)
          {
            dispatch(updateCampaignFailure("ERROR"));
            reject(err);
          }
          else
          {
             if (res.body)
             {
                dispatch(updateCampaignSuccess(res.body))  
                resolve(res.body);
             }
             else
             {
                dispatch(updateCampaignFailure("Error")); 
                reject("Error");
             }
          }

        });
        });
  }
}