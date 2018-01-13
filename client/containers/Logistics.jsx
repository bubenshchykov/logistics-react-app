import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddStock from '../components/AddStock.jsx';
import StockList from '../components/StockList.jsx';
import AddProduct from '../components/AddProduct.jsx';
import ProductList from '../components/ProductList.jsx';
import * as StockActions from '../actions';

const App = ({stocks, products, actions, selectedStockId}) => (
  <div className="app">
    <AddStock addStock={actions.addStock} />
    <StockList stocks={stocks} actions={actions} />
    <h2>Stock products</h2>
    <AddProduct addProduct={actions.addProduct} 
      selectedStockId={selectedStockId} />
    <ProductList products={products}/>
  </div>
);

App.propTypes = {
  stocks: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const selectedStockId = ownProps.match.params.stock || state.stocks.allIds[0];
  const stocks = state.stocks.allIds.map(stockId =>
      ({...state.stocks.byId[stockId], selected: stockId === selectedStockId})
  );
  const selectedProductIds = state.stocks.byId[selectedStockId] && state.stocks.byId[selectedStockId].products || [];
  
  return {
    selectedStockId,
    stocks,
    products: selectedProductIds.map(productId => ({...state.products.byId[productId]}))
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(StockActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);