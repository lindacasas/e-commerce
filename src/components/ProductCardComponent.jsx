import React from 'react';
import { Link } from 'react-router-dom';

const ProductCardComponent = () => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/items/${product.id}`}>View Details</Link>
        </div>
    );
}

export default ProductCardComponent;