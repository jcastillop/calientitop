import React from 'react'
import Login from './components/login/index'
import Principal from './components/principal/page'
import history from './components/utils/history'
import Todo from './components/todo'

import { Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
        //<Todo />
        <Router history={history}>
            <Login />
            <Switch>
                <Route exact path="/principal"  component={Principal} />
            </Switch>
        </Router>
        
    )
}

export default App;
