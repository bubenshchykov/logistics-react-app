# Stocks & Products - react ecosystem app [![Build Status](https://img.shields.io/travis/bubenshchykov/logistics-react-app/master.svg)](https://travis-ci.org/bubenshchykov/logistics-react-app)

A prototype of Logistics app. You can create stocks, products, and distribute products between stocks - as simple as that.

Also, a quick playground for react, redux, routing and ecosystem around.

```
yarn install
yarn start
```

![Logistics](https://media.giphy.com/media/13ofcTggHtvOEg/giphy.gif)

## Techs

### Core
* [react](https://reactjs.org/) - rendering and structuring layout
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - routing

### App state 
* [redux](https://redux.js.org/) and [react-redux](https://github.com/reactjs/react-redux) - app state management and unidirectional data flow
* [normalized data](https://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html) - pattern for oranizing nested relational data
* [redux-persist](https://github.com/rt2zz/redux-persist) - for storing and rehydrating app state (for now, in localStorage)
* [dot-prop-immutable](https://github.com/debitoor/dot-prop-immutable) - sweet helper for immutable state changes

### Bundling
* [webpack](https://webpack.github.io/) - quick and nice js, jsx and sass bundling
* [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) - for hooking bundled assets into master html
* [babel](https://babeljs.io/) with [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) - for using latest ES safely in all browsers

### Code style
* [airbnb code style](https://github.com/airbnb/javascript) - makes perfect sense
* [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) - code style works only when enforced by eslint :)

### Dev tools
* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ru) - must-have browser extension when using redux
* [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) and [react-hot-loader](https://github.com/gaearon/react-hot-loader) - hot code reload

## Work in progress
- [ ] save data to api
- [ ] offline mode support
- [ ] host on gh-pages
- [ ] turn into [Progressive Web App](https://developers.google.com/web/progressive-web-apps/)
- [ ] tests 
