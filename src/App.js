import React from 'react'
import Login from './components/login/index'
import Principal from './components/principal/page'
import Articulos from './components/articulos/index'
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
                <Route exact path="/Inicio"  component={Principal} />
                <Route exact path="/Principal"  component={Principal} />
                <Route exact path="/Articulos"  component={Articulos} />
            </Switch>
        </Router>
        
    )
}

export default App;