import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FavoritesListItem.css'


class FavoritesListItem extends Component {

    state = {
        showAdd: true,
        local: ''
    }
 
    // togglAddRemove = () => {
    //     this.setState({
    //         showAdd: !this.state.showAdd // flip the boolean using ! NOT
    //     })
    //     this.addPizza()
    // }

    // addPizza = () => {
    //     if (this.state.showAdd === true) {
    //         this.setState({
    //             pizzaChoice: this.props.pizza.id
    //         })
    //         console.log('PizzaListItem addPizza state is true', this.props.pizza.id)
    //     }
    //     else if (this.state.showAdd === false) {
    //         console.log('PizzaListItem addPizza state is false')
    //     }
    // }

    sendToStore = () => {
        
    }
 
    render() {

        return (
            <div className="card">
                <img height="150px" src={this.props.favorite.url} alt={this.props.favorite.title}/>
                <h2>{this.props.favorite.title}</h2>
                <button onClick={this.togglAddRemove}>
                    {this.state.showAdd ? `Remove From Favorite!` : `Remove From NOT Favorite!`}
                </button>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(FavoritesListItem);