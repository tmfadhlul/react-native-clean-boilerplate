import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (__DEV__) {
  // middlewares.push(logger);
}

export default middlewares;
