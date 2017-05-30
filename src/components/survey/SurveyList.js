import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class SurveyList extends Component {

  render() {
    const { errorMessage, surveys, campaign, onSelectSurvey, onCreateSurvey } = this.props
    const {campaignId } = campaign;

    return (
            surveys
            &&
            <div className ="container">      
            {
               <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#createSurveyModal">
                  <span className="glyphicon glyphicon-plus"></span> Add Survey
                </button> 
            }      
            {
                surveys.surveys.map((row, index) => (
                <div style={{width: '40%', marginTop:'10px' }} key={index}>  
                <div className="input-group">
              
                <input type="text" className="form-control" ref="name" placeholder="Enter Campaign Name" defaultValue={row.surveyName} />
                 
                 <span className="input-group-btn">
                 <button onClick= {(event) => this.handleClick(row.surveyId,event)} className="btn btn-default">Go</button>
                 </span>
                </div>
                </div>
              ))
            }

             {
                  <div id="createSurveyModal" className="modal" role="dialog">
                  <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Create Survey</h4>
                    </div>
                    <div className="modal-body">
                      <div className ="form-signin">
                       <div  style={{width: '100%' }}>
          
                <label >Survey Name:</label>
                <input type="text" className="form-control" ref="surveyName" placeholder="Enter Survey Name" />
                </div>
    
                <div className="form-group">
                <label >Description:</label>
                <input type="text" className="form-control" ref="description" placeholder="Description" />
                </div>

                <div className="form-group">
                <label >Audiences:</label>
                <input type="text" className="form-control" ref="audiences" placeholder="Audiences" />
                </div>

                <div className="form-group">
                <label >Questions:</label>
                <input type="text" className="form-control" ref="questions" placeholder="questions" />
                </div>

                <div className="form-group">
                 <button className="btn btn-lg btn-primary" onClick= {(event) => this.handleCreateClick(campaignId,event)}>Create</button>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                </div>
                      {errorMessage &&
                        <p >{errorMessage}</p>
                      }
                    </div>
                    </div>
                    </div>
                    </div>
            } 

            </div>
    )
  }

   handleClick(id, event) {
    this.props.onSelectSurvey(id)
  }

  handleCreateClick(campaignId, event)
  {
    const surveyName = this.refs.surveyName.value;
    const audiences = this.refs.audiences.value;
    const questions = this.refs.questions.value;
    var request = {
      campaignId:campaignId, 
      surveyName:surveyName, 
      audiences:[audiences], 
      questions:[
          {text:questions, index:1, startOption:1, endOption:4}
      ]
    }
    this.props.onCreateSurvey(request);
  }

}

SurveyList.propTypes = {
  onSelectSurvey: PropTypes.func,
  onCreateSurvey: PropTypes.func,
  errorMessage: PropTypes.string,
  surveys : PropTypes.object,
  campaign : PropTypes.object
}