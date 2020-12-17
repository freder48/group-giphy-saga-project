import React, { Component } from 'react';
import Search from '../Search/Search'
import { HashRouter as Router, Route, Link } from 'react-router-dom'; 

class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Router>
        <nav>
          <ul>
            <li><Link to ="/">Home</Link></li> 
            <li><Link to ="/search">Search</Link></li>
            <li><Link to ="/favorite">Favorites Gallery</Link></li>
          </ul>
        </nav>

        <Route exact path="/"/>
        <Route path="/search" component={Search}/>
        <Route path="/favorite"/>

        </Router>
      </div>
    );
  }
  
}

export default App;
