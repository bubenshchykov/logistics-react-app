import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => (
  <div className="stocks">
    {products.map(product =>
      (
        <div
          key={product.id}
          className="product"
        >
          {product.name}
        </div>
      ))
    }
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default ProductList;
