import React from 'react';
import io from 'socket.io-client';
import Header from './parts/header';


class APP extends React.Component{

  constructor(){
    super();
    this.state = {
      status: 'disconnected',
      title: 'He Said What?!?!',
      member: {},
      audience: [],
      speaker: '',
      questions: [],
      currentQuestion: false,
      results: {},
      begin: false,
      round: 0,
      timeLeft: 30
    };

    this.emit = this.emit.bind(this);
  }

  componentWillMount() {
    this.socket = io('localhost:3000');

    this.socket.on('connect', ()=>{
      let member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;

      if(member && member.type === 'member'){
        this.emit('join', member);
      } else if (member && member.type === 'speaker'){
        this.emit('start', { name: member.name, title: sessionStorage.title });
      }

      this.setState({ status: 'connected' });
    });

    this.socket.on('disconnect', ()=>{
      this.setState({
        status: 'disconnected',
        title: 'disconnected',
        speaker: ''
      });
    });

    this.socket.on('welcome', x=>this.setState(x));

    this.socket.on('joined', member=>{
      sessionStorage.member = JSON.stringify(member);
      this.setState({ member: member });
    });


    this.socket.on('audience', (newAudience)=>{
      this.setState({ audience: newAudience });
    });

    this.socket.on('start', (presentation)=>{
      if(this.state.member.type === 'speaker'){
        sessionStorage.title = presentation.title;
      }

      this.setState(presentation);
    });

    this.socket.on('beginRound', (round)=>{
      this.setState(round);
    });

    this.socket.on('end', x=>this.setState(x));

    this.socket.on('ask', (question)=>{
      sessionStorage.answer = '';
      this.setState({
        currentQuestion: question,
        results: {a:0,b:0,c:0,d:0}
      })
    });
    this.socket.on('results', (data)=>{
      this.setState({ results: data });
    });
  }

  emit(eventName, payload){
    this.socket.emit(eventName, payload);
  }

  render (){
    return (
      <div>
        <Header {...this.state}/>
        {React.cloneElement(
          this.props.children,
          { emit: this.emit, ...this.state }
        )}
      </div>
    );
  }
}


module.exports = APP;
