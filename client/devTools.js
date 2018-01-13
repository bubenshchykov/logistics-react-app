const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();

const hotReload = (render, reducer) => {
  if (module.hot) {
    module.hot.accept('./containers/Logistics.jsx', () => {
      render(require('./containers/Logistics.jsx').default);
    });
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducer);
    });
  }
}

export default {storeEnhancer, hotReload};