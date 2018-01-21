import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddStock from '../components/AddStock';
import StockList from '../components/StockList';
import AddProduct from '../components/AddProduct';
import ProductList from '../components/ProductList';
import { addProduct, addStock} from '../actions';

const App = ({
  stocks,
  products,
  addStock,
  addProduct,
  selectedStockId,
}) => (
  <div className="app">
    <AddStock addStock={addStock} />
    <StockList stocks={stocks} />
    <h2>Stock products</h2>
    <AddProduct
      addProduct={addProduct}
      selectedStockId={selectedStockId}
    />
    <ProductList products={products} />
  </div>
);

App.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedStockId: PropTypes.string,
  addStock: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
};

App.defaultProps = {
  selectedStockId: null,
};

const mapStateToProps = (state, ownProps) => {
  const selectedStockId = ownProps.match.params.stock || state.stocks.allIds[0];
  const stocks = state.stocks.allIds.map(stockId =>
    ({
      ...state.stocks.byId[stockId],
      selected: stockId === selectedStockId,
    }));
  const selectedStock = state.stocks.byId[selectedStockId];
  const selectedProductIds = (selectedStock && selectedStock.products) || [];

  return {
    selectedStockId,
    stocks,
    products: selectedProductIds.map(productId =>
      ({ ...state.products.byId[productId] })),
  };
};

export default connect(
  mapStateToProps,
  { addProduct, addStock },
)(App);
