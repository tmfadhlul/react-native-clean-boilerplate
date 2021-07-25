import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootSaga from './sagas';
import rootReducer from './reducers';
import persistConfig from './persist';
import middlewares from './middlewares';

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

middlewares[0].run(rootSaga);

export {store, persistor};
