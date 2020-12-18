import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FavoritesListItem.css'


class FavoritesListItem extends Component {

    state = {
        showAdd: true,
        local: ''
    }

 

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


    delete = (event, passedId) => {
        this.props.dispatch({type: 'DELETE', payload: passedId});
        this.props.dispatch({type: 'FETCH_FAVORITES'});
    }

   

    sendToStore = () => {
        
    }
 
    render() {

        return (
            <div className="display card">
                <img height="150px" className="pictureClass" src={this.props.favorite.url} alt={this.props.favorite.title}/>
                <h3>{this.props.favorite.title}</h3>
                {/* {JSON.stringify(this.props.favorite.id)} */}
                <button onClick={(event)=>this.delete(event,this.props.favorite.id ) }>Delete Giphy</button>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(FavoritesListItem);