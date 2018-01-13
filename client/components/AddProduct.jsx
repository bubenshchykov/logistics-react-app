import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const AddProduct = ({ addProduct, selectedStockId }) => {
  let input;

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        addProduct(input.value, v4(), selectedStockId);
        input.value = '';
      }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
          placeholder="Product name"
        />
        <button type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
  selectedStockId: PropTypes.string.isRequired,
};

export default AddProduct;
