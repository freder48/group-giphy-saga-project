import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

    state = {
        search: ''
    }

    handleChange = (event) => {
        console.log('event happened', event.target.value);
        this.setState({
            search: event.target.value,
        });
    }

    searchGiphy = () => {
        this.props.dispatch({ type: 'SEARCH_GIPHY', payload: this.state.search })
        this.setState({
            search: ''
        });
    }

  render() {
    return (
      <div>
        <h1>Search!</h1>
            <section>
                <label>Search</label>
                <input type="text" value={this.state.search} onChange={this.handleChange}/>
                <button onClick={this.searchGiphy}>Submit</button>
            </section>

            <section>
                <h2>Search Results</h2>
                <ul>
                    {/* will fill this in */}
                </ul>
            </section>
      </div>
    );
  }
  
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  });
  
export default Search;
  