import { connect } from "react-redux";
import React, { Component } from "react";
import './FavoritesList.css'
import FavoritesListItem from "../FavoritesListItem/FavoritesListItem";

class FavoritesList extends Component {

  state = {
    category: ''
  }

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_FAVORITES' });//tack on an additional parameter from the category to find the get.
    console.log ('in mount');
  }

  clickHandler = () => {
    this.props.dispatch({type: 'FETCH_FAVORITES'});
  };
  
  handleNameChange = (event) => {
    console.log('event happended')
    this.setState({
        category: event.target.value,
    });
  }

  render() {
    return (
      <div className="favoritesList">
        <h2>Your Selected Favorites</h2>

          <p>&nbsp;</p>
            <label>Choose a Category:</label>
            <select id="rating" name="rating" onChange={(event)=>this.handleNameChange(event)}>
                <option value="All">All</option>
                <option value="Funny">Funny</option>
                <option value="Cohort">Cohort</option>
                <option value="Cartoon">Cartoon</option>
                <option value="NSFW">NSFW</option>
                <option value="MEME">MEME</option>
                
            </select>
            <p> </p>

          --

        <ul>
          {/* {JSON.stringify(this.props.reduxStore.favoritesList)} */}
          {this.props.reduxStore.favoritesList.map((favorite, index) => {
            return <FavoritesListItem key={index} favorite={favorite} />;
          })}
        </ul>
        <button onClick={this.clickHandler}>Refresh Page</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore,
});

export default connect(putReduxStateOnProps)(FavoritesList);
  