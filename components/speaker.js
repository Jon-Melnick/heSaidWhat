import React from 'react';
import Display from './parts/display';
import JoinSpeaker from './parts/joinSpeaker';
import Attendance from './parts/attendance';
import Questions from './parts/questions';

class Speaker extends React.Component{
  render(){
    return (
      <div>
        <Display if={this.props.status === 'connected'}>

          <Display if={this.props.member.name && this.props.member.type === 'speaker'}>
            <Questions questions={this.props.questions} emit={this.props.emit}/>
            <Attendance audience={this.props.audience} />
          </Display>

          <Display if={!this.props.member.name}>
            <h2>Start the Presentation</h2>
            <JoinSpeaker emit={this.props.emit} />
          </Display>

        </Display>
      </div>
    )
  }
}

module.exports = Speaker;
