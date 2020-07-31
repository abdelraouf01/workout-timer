import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Timer from './containers/Timer';
// import About from './containers/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './containers/Form';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Timer} />
          <Route path="/feedback" component={Form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
