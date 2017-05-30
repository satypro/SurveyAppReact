import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { loginUser, getUser, updateUser } from '../actions/UserActions'
import {
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  GETUSER_REQUEST, 
  GETUSER_SUCCESS, 
  GETUSER_FAILURE, 
  UPDATEUSER_REQUEST, 
  UPDATEUSER_SUCCESS, 
  UPDATEUSER_FAILURE
} from '../actions/UserActions'
import Navbar from '../components/nav/Navbar'
import Home from '../components/home/Home'

import { getCampaign, updateCampaign, createCampaign } from '../actions/CampaignActions'
import {
  GETCAMPAIGN_REQUEST, 
  GETCAMPAIGN_SUCCESS, 
  GETCAMPAIGN_FAILURE,
  GETCAMPAIGNLIST_REQUEST,
  GETCAMPAIGNLIST_SUCCESS,
  GETCAMPAIGNLIST_FAILURE
} from '../actions/CampaignActions'
import Campaign from '../components/campaign/Campaign'
import CampaignList from '../components/campaign/CampaignList'

import 
{
  GETBASIC_REQUEST,
  GETBASIC_SUCCESS,
  GETBASIC_FAILURE
} from '../actions/ReportsActions'
import Report from '../components/reports/Report'


import
{
  GETSURVEYLIST_REQUEST,
  GETSURVEYLIST_SUCCESS,
  GETSURVEYLIST_FAILURE,
  GETSURVEY_REQUEST,
  GETSURVEY_SUCCESS,
  GETSURVEY_FAILURE,
} from '../actions/SurveyActions'
import { getSurveyList, getSurvey, createSurvey, updateSurvey } from '../actions/SurveyActions'
import SurveyList from '../components/survey/SurveyList'
import Survey from '../components/survey/Survey'

class App extends Component {
  render() {
    const { dispatch, Reducer } = this.props

    return (
      <div>
        <Navbar
          isAuthenticated={Reducer.isAuthenticated}
          Reducer={Reducer}
          dispatch ={dispatch}
        />
        {
            (Reducer.type == GETUSER_SUCCESS || Reducer.type == UPDATEUSER_SUCCESS)
            && Reducer.isAuthenticated 
            && Reducer.user 
            && GetHome(this.props)
        } 
        {
            Reducer.type == GETBASIC_SUCCESS 
            && Reducer.isAuthenticated 
            && Reducer.report 
            && GetReport(this.props)
        } 
        {
            Reducer.type == GETCAMPAIGN_SUCCESS 
            && Reducer.isAuthenticated 
            && Reducer.campaign 
            && GetACampaign(this.props)
        } 

        {
            Reducer.type == GETCAMPAIGNLIST_SUCCESS 
            && Reducer.isAuthenticated 
            && Reducer.campaigns 
            && GetCampaignList(this.props)
        } 

         {
            Reducer.type == GETSURVEYLIST_SUCCESS 
            && Reducer.isAuthenticated 
            && Reducer.surveys 
            && GetSurveyList(this.props)
        } 

        {
            Reducer.type == GETSURVEY_SUCCESS 
            && Reducer.isAuthenticated 
            && Reducer.survey
            && GetASurvey(this.props)
        } 

      </div>
    )
  }
}

App.propTypes = {
  Reducer: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) 
{
  console.log(state);

  const {dispatch, Reducer}=state;
  return {
   Reducer,
   dispatch
  }
}

function GetHome(props) {

  const { dispatch, Reducer }=props
  const { isAuthenticated, errorMessage, user, report }=Reducer;
  return (<Home
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              user = {user}
              dispatch = {dispatch}
              onSubmitUpdate ={updateuser => dispatch(updateUser(updateuser))}
            /> 
          );
}

function GetReport(props)
{
    const { dispatch, Reducer }=props
    const { isAuthenticated, errorMessage, user, report }=Reducer;
    return ( <Report
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              report = {report}
              user = {user}
              dispatch = {dispatch}
            /> 
            );
}

function GetACampaign(props) 
{
    const { dispatch, Reducer }=props
    const { isAuthenticated, errorMessage, user, campaign }=Reducer;
    return ( <Campaign
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              campaign = {campaign}
              user = {user}
              dispatch = {dispatch}
              onSubmitCampaign = {campaignUpdate => dispatch(updateCampaign(campaignUpdate))}
              onGetSurveys = {campaignId => dispatch(getSurveyList(campaignId))}
            /> 
            );

}

function GetCampaignList(props) 
{
    const { dispatch, Reducer }=props
    const { isAuthenticated, errorMessage, user, campaigns }=Reducer;
    return (<CampaignList
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              campaigns = {campaigns}
              user = {user}
              dispatch = {dispatch}
              onSelectCampaign = {id => dispatch(getCampaign(id))}
              onCreateCampaign = {request => dispatch(createCampaign(request))}
            />
            ); 
}

function GetSurveyList(props) 
{
    const { dispatch, Reducer }=props
    const { isAuthenticated, errorMessage, user, surveys, campaign }=Reducer;
    return ( <SurveyList
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              user = {user}
              dispatch = {dispatch}
              surveys = {surveys}
              campaign = {campaign}
              onSelectSurvey = {surveyId => dispatch(getSurvey(surveyId))}
              onCreateSurvey = { request => dispatch(createSurvey(request))}
            /> 
            );
}

function GetASurvey(props) 
{
    const { dispatch, Reducer }=props
    const { isAuthenticated, errorMessage, user, survey }=Reducer;
    return ( <Survey
              isAuthenticated={isAuthenticated}
              errorMessage={errorMessage}
              user = {user}
              dispatch = {dispatch}
              survey = {survey}
              onUpdateSurvey ={request => dispatch(updateSurvey(request))}
            /> 
            );
}


export default connect(mapStateToProps)(App)