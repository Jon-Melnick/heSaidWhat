import React from 'react';

const JoinSpeaker = React.createClass({

  start(){
    let speakerName = this.refs.name.value;
    let title = this.refs.title.value;

    this.props.emit('start', { name: speakerName, title: title })
  },

  render(){
    return (
      <form action='javascript:void(0)' onSubmit={this.start}>

        <label>Full Name</label>
        <input ref='name'
               className='form-control'
               placeholder='enter your full name...'
               required />

       <label>Presentation Title</label>
       <input ref='title'
              className='form-control'
              placeholder='enter a title for the presentation...'
              required />

        <button className='btn btn-primary'>Join</button>

      </form>
    )
  }

});

module.exports = JoinSpeaker;
