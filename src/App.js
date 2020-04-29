import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Categories from './components/Categories';
import Countries from './components/Countries';
import WebcamPage from './components/WebcamPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/categories" component={Categories} />
          <Route path="/countries" component={Countries} />
          <Route path="/webcamPage" component={WebcamPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
