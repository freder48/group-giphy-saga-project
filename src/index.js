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
    yield takeEvery('FETCH_FAVORITES', favoritesList );
}

function* favoritesList() {
    console.log('In favoritesList');
    
    try {
        const response = yield axios.get('/api/favorite');
        yield put({ type:'GRAB_FAVORITES',  payload: response.data})
    }catch ( error ) {
    console.log('error with get request', error);
    }
}


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ 
        favoritesList,

     }),
    applyMiddleware(sagaMiddleware, logger),
  );

  sagaMiddleware.run(watcherSaga);

ReactDOM.render(<App />, document.getElementById('react-root'));










