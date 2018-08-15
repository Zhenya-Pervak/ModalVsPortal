import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducers/index';

export default createStore(reducer, composeWithDevTools(applyMiddleware(createLogger())));

