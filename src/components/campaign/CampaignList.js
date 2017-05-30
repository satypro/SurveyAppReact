import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class CampaignList extends Component {

  render() {
    const { errorMessage, campaigns, onSelectCampaign } = this.props

    return (
            campaigns
            &&
            <div className ="container">
            {
               <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#createCampaignModal">
                  <span className="glyphicon glyphicon-plus"></span> Add Campaign
                </button> 
            }
            {
                campaigns.map((row, index) => (
                <div style={{width: '40%', marginTop:'10px' }} key={index}>  
                <div className="input-group" >
              
                <input type="text" className="form-control" ref="name" placeholder="Enter Campaign Name" defaultValue={row.campaignName} />
                 
                 <span className="input-group-btn">
                 <button  type="button" onClick= {(event) => this.handleClick(row.campaignId,event)} className="btn btn-default">
                   <span className="glyphicons glyphicons-arrow"></span>GO
                </button>
                 </span>
                </div>
                </div>
              ))
            }
            
            {
                  <div id="createCampaignModal" className="modal" role="dialog">
                  <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Create Campaign</h4>
                    </div>
                    <div className="modal-body">
                      <div className ="form-signin">
                      
                      <div className="form-group">
                      <label >Campaign Name:</label>
                      <input type="text" className="form-control" ref="campaignName" placeholder="Enter Campaign Name" />
                      </div>
                      
                      <div className="form-group">
                      <label >Campaign Description:</label>
                      <input type='text' ref='campaignDescription' className="form-control"  placeholder='Campaign Description' />
                      </div>
                      
                      <div className="form-group">
                      <label >Schedule Date:</label>
                      <input type="date" className="form-control" ref="scheduleDate" placeholder="Schedule Date" />
                      </div>

                      <div className="form-group">
                      <label >ScheduledStartTime:</label>
                      <input type="date" className="form-control" ref="scheduledStartTime" placeholder="Enter Scheduled StartTime" />
                      </div>

                      <div className="form-group">
                      <label >scheduledEndTime:</label>
                      <input type="date" className="form-control" ref="scheduledEndTime" placeholder="Enter Scheduled EndTime"/>
                      </div>

                      <div className="form-group">
                      <button className="btn btn-lg btn-primary btn-block" onClick= {(event) => this.handleCreateClick(event)}>
                        Create
                      </button>
                      </div>
                      {errorMessage &&
                        <p >{errorMessage}</p>
                      }
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
            } 
            </div>
    )
  }

  handleCreateClick(event)
  {
    var campaignName = this.refs.campaignName.value
    var campaignDescription = this.refs.campaignDescription.value
    var scheduleDate = this.refs.scheduleDate.value
    var scheduledEndTime = this.refs.scheduledEndTime.value
    var scheduledStartTime = this.refs.scheduledStartTime.value

    var request = {
      campaignName:campaignName, 
      campaignDescription:campaignDescription,
      scheduleDate:scheduleDate, 
      scheduledEndTime:scheduledEndTime,
      scheduledStartTime:scheduledStartTime
    }
    this.props.onCreateCampaign(request);
  }

   handleClick(id, event) {
    this.props.onSelectCampaign(id)
  }
}

CampaignList.propTypes = {
  onSelectCampaign: PropTypes.func.isRequired,
  onCreateCampaign: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  campaigns : PropTypes.array
}