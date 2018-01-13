import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const AddStock = ({ addStock }) => {
  let input;

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        addStock(input.value, v4());
        input.value = '';
      }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
          placeholder="Stock name"
        />
        <button type="submit">
          Add Stock
        </button>
      </form>
    </div>
  );
};

AddStock.propTypes = {
  addStock: PropTypes.func.isRequired,
};

export default AddStock;
