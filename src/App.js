import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PriceList from "./Components/PriceList/PriceList"
import Index from "./Components/AppIndex/Index"
import Login from './Components/Login/Login';

class App extends Component {
  render()
  {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Index}></Route>
            <Route path="/beer" exact component={PriceList}></Route>
            <Route path="/login" exact component={Login}></Route>
            </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
