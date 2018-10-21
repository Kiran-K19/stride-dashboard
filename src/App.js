import React, { Component } from 'react';
import './App.css';
import FullCardView from './FullCardView';
import Documents from './Documents';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/documents">Documents  ></Link>
          <Route path="/dashboard" exact component={FullCardView} />
          <Route path="/documents" exact component={Documents} />
        </div>
      </Router>
    );
  }
}

export default App;
