import React from 'react';
import Display from './parts/display';
import { BarChart } from 'react-d3';


const Board = React.createClass({


  barGraphData(results){
    let x = Object.keys(results).map(choice=>{
      return {
        'x': choice,
        'y': results[choice]
      }
    });

    return {values: x};
  },


  render(){
    return (
      <div id='scoreboard'>

        <Display if={this.props.status === 'connected' && this.props.currentQuestion}>

          <BarChart data={[this.barGraphData(this.props.results)]}
            title={this.props.currentQuestion.q}
            height={window.innerHeight * 0.6}
            width={window.innerWidth * 0.9} />

        </Display>

        <Display if={this.props.status === 'connected' && !this.props.currentQuestion}>
          <h3>Awaiting a Question...</h3>
        </Display>

      </div>
    )
  }
});

module.exports = Board;
