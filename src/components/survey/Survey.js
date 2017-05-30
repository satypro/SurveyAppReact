import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Survey extends Component {

  render() {
    const { errorMessage, survey, onUpdateSurvey, onRunSurvey, onScheduleSurvey } = this.props

    return (
            survey
            &&
            <div className ="container">
           
            <div action="#" style={{width: '40%' }}>
                
                <div className="form-group">
                <label >Survey Name:</label>
                <input type="text" className="form-control" ref="surveyName" placeholder="Enter Survey Name" defaultValue={survey.surveyName} />
                </div>
    
                <div className="form-group">
                <label >Description:</label>
                <input type="text" className="form-control" ref="description" placeholder="Description" defaultValue = {survey.description} />
                </div>
                
                <div className="form-group">
                <label >Audiences:</label>
                <input type="text" className="form-control" ref="audiences" placeholder="Audiences" defaultValue = {survey.audiences}/>
                </div>

                <div className="form-group">
                <label >Questions:</label>
                <input type="text" className="form-control" ref="questions" placeholder="questions" defaultValue = {survey.questions}/>
                </div>

                <div className="form-group">
                 <button onClick= {(event) => this.handleUpdateClick(survey.surveyId, event)} className="btn btn-lg btn-primary pull-left">Update</button>
                </div>

                <div className="form-group">
                 <button onClick= {(event) => this.handleRunClick(survey.surveyId, event)} className="btn btn-lg btn-primary pull-left">Run Survey</button>
                </div>

                <div className="form-group">
                 <button onClick= {(event) => this.handleScheduleClick(survey.surveyId, event)} className="btn btn-lg btn-primary pull-left">Schedule Survey</button>
                </div>

            </div>
            </div>
    )
  }

   handleUpdateClick(surveyId, event) {
    const name = this.refs.surveyName.value
    const description = this.refs.description.value
    const audiences = this.refs.audiences.value
    const questions = this.refs.questions.value
    const surveyUpdate = {surveyId:surveyId, surveyName: name, description: description.value, audiences:[audiences], 
      questions:[{text:questions, index:1, startOption:1, endOption:4}] }
    this.props.onUpdateSurvey(surveyUpdate)
  }

  handleRunClick(surveyId, event) {
    const request = { surveyId: surveyId}
    this.props.onRunSurvey (request)
  }

  handleScheduleClick(surveyId, event) {
    const request = { surveyId: surveyId}
    this.props.onScheduleSurvey(request)
  }
}

Survey.propTypes = {
  onUpdateSurvey: PropTypes.func,
  onRunSurvey: PropTypes.func,
  onScheduleSurvey: PropTypes.fun,
  errorMessage: PropTypes.string,
  survey : PropTypes.object
}