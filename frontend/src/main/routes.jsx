import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import Atalhos from '../atalhos/atalhos'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/atalhos' component={Atalhos} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)