import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import reducer from '../reducers';

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
    devTools()
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // So many things wrong with the next line I needn't both linting it.
      // eslint-disable-next-line
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
