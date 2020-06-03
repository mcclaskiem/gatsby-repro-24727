/**
 *
 * Store
 *
 *
 */

import { compose, createStore, combineReducers } from 'redux';

import menuReducer from 'reducers/menu';

const rootReducer = {
  menu: menuReducer,
};

const wrapper = () =>
  createStore(
    combineReducers(rootReducer),
  );

export default wrapper;