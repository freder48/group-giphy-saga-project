import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Search.css'

class Search extends Component {

    state = {
        search: '',
        selectValue: '',
    }

    handleChange = (event) => {
        console.log('event happened', event.target.value);
        this.setState({
            search: event.target.value,
        });
    }

    selectCategory = (event) => {
        console.log('event happened - category', event.target.value);
        this.setState({
            selectValue: event.target.value,
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
                    <label className="space">Search: </label>
                    <input className="space" type="text" value={this.state.search} onChange={this.handleChange} />
                    <button className="space" onClick={this.searchGiphy}>Submit</button>
                </section>

                <section>

                    {/* {JSON.stringify(this.props.reduxState.searchResults)} */}
                    {this.props.reduxState.searchResults.map(giphy =>
                        <div className="display card" key={giphy.id}>

                            <img height="150px" alt={giphy.title} src={giphy.images.fixed_width.url} />
                            <br></br>
                            <br></br>
                            <label htmlFor="category">Category:</label>
                            <select name="category" id="category" onChange={this.selectCategory}>
                                <option value="1">Funny</option>
                                <option value="2">Cohort</option>
                                <option value="3">Cartoon</option>
                                <option value="4">NSFW</option>
                                <option value="5">Meme</option>
                            </select>
                            <br></br>
                            <br></br>
                            <button onClick={() => this.props.dispatch({
                                type: 'ADD_FAVORITE',
                                payload: {
                                    giphy_id: giphy.id,
                                    title: giphy.title,
                                    url: giphy.images.fixed_width.url,
                                    category_id: this.state.selectValue,
                                }
                            })}>
                                Favorite</button>
                        </div>)}
                </section>
            </div>
        );
    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Search);
