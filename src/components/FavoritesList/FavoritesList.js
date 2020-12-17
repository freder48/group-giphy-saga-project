import { connect } from "react-redux";
import React, { Component } from "react";
import FavoritesListItem from "../FavoritesListItem/FavoritesListItem";

class FavoritesList extends Component {
  componentDidMount() {
     this.props.dispatch({type: 'FETCH_FAVORITES'});
  }

  clickHandler = () => {
    this.props.dispatch({type: 'FETCH_FAVORITES'});
  };
 
  render() {
    return (
      <div className="favoritesList">
        <h2>Your Selected Favorites</h2>
        <ul>
          {this.props.reduxStore.favoritesList.map((favorite, index) => {
            return <FavoriteListItem key={index} favorite={favorite} />;
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
  