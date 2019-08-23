import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
  );
}

export default App;
