import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import axios from 'axios';

import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

function* watcherSaga() { 
    yield takeEvery('FETCH_FAVORITES', getFavorites );
    yield takeEvery('SEARCH_GIPHY', getSearch);
    yield takeEvery('ADD_FAVORITE', addFavorite);
    yield takeEvery( 'DELETE' , deleteFavoriteItem);
}


function* addFavorite( action ) {
    console.log('index post', action.payload);
    try { 
        yield axios.post('/api/favorite', action.payload)
        yield put({ type: 'FETCH_FAVORITES' }) 
    } catch (error) {
        console.log('error with add favorite request', error);
    }
}

const searchResults = (state = [], action) => {
    if(action.type === 'SET_RESULTS') {
        console.log('in searchResults reducer', action.payload);
        return action.payload;
    } 
    return state;
}

const favoritesList = (state = [], action) => {
    if( action.type === 'GRAB_FAVORITES'){
        return action.payload
    } 
    return state
}

function* deleteFavoriteItem(action) {
    console.log('delete', action.payload);
    if( action.type === 'DELETE' ){
        try{
            axios.delete(`/api/favorite/${action.payload}`)
            // yield put({ type: 'FETCH_FAVORITES'})
        } catch ( error ) {
            console.log('error with the delete request');
        }    
    }
}


function* getFavorites() {
    try {
        const response = yield axios.get('/api/favorite');
        yield put({ type:'GRAB_FAVORITES',  payload: response.data})
    } catch ( error ) {
    console.log('error with get request', error);
    }
}

function* getSearch(action) {
    console.log('In getSearch');
    
    try {
        const response = yield axios.get(`/api/search/${action.payload}`);
        yield put({ type:'SET_RESULTS',  payload: response.data})
    } catch ( error ) {
    console.log('error with SEARCH GET request', error);
    }
}


const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({ 
        favoritesList,
        searchResults
     }),
    applyMiddleware(sagaMiddleware, logger),
  );

  sagaMiddleware.run(watcherSaga);

  ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('react-root'));
