import React, { Component } from 'react';
import Search from '../Search/Search'
import { HashRouter as Router, Route, Link } from 'react-router-dom'; 
import FavoritesList from '../FavoritesList/FavoritesList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="header">Giphy Search!</h1>
        <Router>
        <nav>
          <ul>
            <li><Link to ="/">Home</Link></li> 
            <li><Link to ="/search">Search</Link></li>
            <li><Link to ="/favoritesList/favoritesList">Favorites Gallery</Link></li>
          </ul>
        </nav>

        <Route exact path="/" />
        <Route path="/search" component={Search} />
        <Route path="/favoritesList" component={FavoritesList} />

        </Router>
      </div>
    );
  }
  
}
 
export default App;
