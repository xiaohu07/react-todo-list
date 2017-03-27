/**
 * Created by mhu on 2/26/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import Header from './components/header';
import NewList from './containers/new_list';
import reducers from './reducers/index';


const enhancer = applyMiddleware(ReduxPromise);

const saveState = (state) => {
  const stringifiedState = JSON.stringify(state);
  sessionStorage.setItem('state', stringifiedState);
};

const loadState = () => {
  const stringifiedState = sessionStorage.getItem('state');
  if (stringifiedState === null) {
    return undefined;
  }
  return JSON.parse(stringifiedState);
};

const persistedState = loadState();

const store = createStore(reducers, persistedState, enhancer);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Header />
      <NewList />
    </div>
  </Provider>,
  document.getElementById('app'));
