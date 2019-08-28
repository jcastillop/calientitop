import React from 'react'
import Login from './components/Login'
import Principal from './components/Principal'

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
            <Login />
            <Switch>
                <Route path="/principal" exact component={Principal}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
