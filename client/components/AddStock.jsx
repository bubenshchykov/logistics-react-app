import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const AddStock = ({addStock}) => {
  let input;

 return (
  <div>
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      addStock(input.value, Math.random());
      input.value = ''
    }}>
      <input ref={node => {
        input = node
      }} />
      <button type="submit">
        Add Stock
      </button>
    </form>
  </div>
)
};

AddStock.propTypes = {
  addStock: PropTypes.func.isRequired
};

export default AddStock;
