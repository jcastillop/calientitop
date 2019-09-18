import React from 'react'
import Login from './components/login/index'
import Principal from './components/Principal'

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
            <Login />
            <Switch>
                <Route exact path="/principal"  component={Principal}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;