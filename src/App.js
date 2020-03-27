import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PriceList from "./Components/PriceList/PriceList"
import Index from "./Components/AppIndex/Index"
import Login from './Components/Login/Login';
import BreweryHome from "./Components/BreweryHome/BreweryHome"
import Bookings from "./Components/Bookings/Bookings"
import BreweryCard from './Components/BreweryCard/BreweryCard';
import Navbar from "./Components/Navbar/Navbar"
class App extends Component {
  render()
  {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Index}></Route>
            <Route path="/breweries" exact component={BreweryCard}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/breweries/:breweryId"  component={BreweryHome}/>
            <Route path="/myBookings/"  exact component={Bookings}/>
            </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
