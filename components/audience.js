import React from 'react';
import Display from './parts/display';
import Join from './parts/join';
import Ask from './parts/ask';
import Questions from './parts/questions';


const Audience = React.createClass({

  start(e){
    e.preventDefault();
    this.props.emit('startGame', {game: 'start'});
    console.log(this.props.emit);
  },

  render(){
    console.log(this.props);
    return (
      <div>
        <Display if={this.props.status === 'connected'}>

          <Display if={this.props.member.name}>

            <Display if={!this.props.currentQuestion && !this.props.begin}>
              <h2>
                Welcome {this.props.member.name}
              </h2>
              <p>{this.props.audience.length} players ready to play</p>
              <p>
                <button onClick={this.start}>
                  Begin Game?
                </button>
              </p>
            </Display>

            <Display if={this.props.speaker === this.props.member.name}>
              <Questions questions={this.props.questions} emit={this.props.emit}/>
            </Display>

            <Display if={this.props.currentQuestion && this.props.speaker !== this.props.member.name}>
              <Ask question={this.props.currentQuestion} emit={this.props.emit}/>
            </Display>

          </Display>

          <Display if={!this.props.member.name}>
            <h1>Join the game</h1>
            <Join emit={this.props.emit}/>
          </Display>

        </Display>
      </div>
    )
  }
});

module.exports = Audience;
