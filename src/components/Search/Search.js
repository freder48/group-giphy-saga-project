import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

    state = {
        search: '',
        // giphy: {
        //     giphy_id: '',
        //     title: '',
        //     url: '',
        //     category_id: ''
        // }
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

    // setFavorite = (event) => {
    //     console.log('setEvent', event.target);

    //     this.setState({
    //         giphy: {
    //             giphy_id: `${this.props.reduxState.searchResults.id}`,
    //             // title: giphy.title,
    //             // url: giphy.images.fixed_width.url,
    //             // category_id: 1
    //         }
    //     })
    //     console.log('in setFavorite', this.state.giphy);
    //     this.addFavorite(this.state.giphy);
    // }

    // addFavorite = (giphy) => {
    //     console.log('search send', giphy);
    //     this.props.dispatch({ type: 'ADD_FAVORITE', payload: giphy})
    // }

    render() {
        return (
            <div>
                <h1>Search!</h1>
                <section>
                    <label>Search</label>
                    <input type="text" value={this.state.search} onChange={this.handleChange} />
                    <button onClick={this.searchGiphy}>Submit</button>
                </section>

                <section>
                    <h2>Search Results</h2>
                    {/* {JSON.stringify(this.props.reduxState.searchResults)} */}
                    {this.props.reduxState.searchResults.map(giphy =>
                        <p key={giphy.id}>

                            <img alt={giphy.title} src={giphy.images.fixed_width.url} />
                            <br></br>
                            <button onClick={() => this.props.dispatch({
                                type: 'ADD_FAVORITE',
                                payload: {
                                    giphy_id: giphy.id,
                                    title: giphy.title,
                                    url: giphy.images.fixed_width.url,
                                    category_id: 1
                                }
                            })}>
                                Favorite</button>
                                <br></br>
                            <label htmlFor="category">Category:</label>
                            <select name="category" id="category">
                                <option value="funny">Funny</option>
                                <option value="cohort">Cohort</option>
                                <option value="cartoon">Cartoon</option>
                                <option value="nsfw">NSFW</option>
                                <option value="meme">Meme</option>
                            </select>
                        </p>)}
                </section>
            </div>
        );
    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Search);
