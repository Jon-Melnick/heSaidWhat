import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router';
import APP from './components/APP';
import routes from './components/routes'


document.addEventListener('DOMContentLoaded', ()=>{
  ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('react-container')
  )
})
