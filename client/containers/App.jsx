import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddStock from '../components/AddStock.jsx'
import StockList from '../components/StockList.jsx'
import * as StockActions from '../actions'

const App = ({stocks, actions}) => (
  <div>
    <AddStock addStock={actions.addStock} />
    <StockList stocks={stocks} actions={actions} />
  </div>
)

App.propTypes = {
  stocks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  stocks: state.stocks.map(stock => Object.assign({}, stock, {
    selected: stock.id === state.stocksFilter
  }))
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(StockActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
