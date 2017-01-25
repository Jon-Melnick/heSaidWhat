import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Audience from './audience';
import Speaker from './speaker';
import Board from './board';
import APP from './APP';

const NotFound = () => (
  <div id='not-found'>
    <h1>Whoops...</h1>
    <p>404... This page is not found!</p>
  </div>
)

export default (
  <Route path="/" component={APP}>
    <IndexRoute component={Audience} />
    <Route name='speaker' path='speaker' component={Speaker}></Route>
    <Route name='board' path='board' component={Board}></Route>
    <Route path='*' component={NotFound} />
  </Route>
)
