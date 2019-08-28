import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MainScreen from "./MainScreen.js";
import Principal from "../components/Principal.js";

export default () => (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/principal">Users</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
        </ul>
        <Switch>
            <Route exact path="/home" render={() => <Principal name="React Medellín" />}/>
            <Route exact path="/principal" component={Principal} />
            <Route exact path="/main" component={MainScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );