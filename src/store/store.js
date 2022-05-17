import { compose, createStore, applyMiddleware } from 'redux';
import { loggerMiddleware } from '../middleware/logger';

import { rootReducer } from './root-reducer';

const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
