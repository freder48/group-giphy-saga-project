import { connect } from "react-redux";
import React, { Component } from "react";
import FavoritesListItem from "../FavoritesListItem/FavoritesListItem";

class FavoritesList extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_FAVORITES'});
    console.log ('in mount');
  }

  clickHandler = () => {
    this.props.dispatch({type: 'FETCH_FAVORITES'});
  };
 
  render() {
    return (
      <div className="favoritesList">
        <h2>Your Selected Favorites</h2>
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
  