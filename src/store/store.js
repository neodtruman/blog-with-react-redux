import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}
const localPersistReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(localPersistReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
