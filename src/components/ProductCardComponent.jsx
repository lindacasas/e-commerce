import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import '../styles/ProductCardComponent.css';
import defaultImage from '../assets/img-ecm.png';

const ProductCardComponent = ({ product }) => {
    const [numberOfStars, setNumberOfStars] = useState(() => Math.floor(Math.random() * (6 - 2)) + 2);
    const [imageSrc, setImageSrc] = useState(product.image);

    const isValidImageUrl = (url) => {
        return (url && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png')));
    };

    useEffect(() => {
        if (!isValidImageUrl(product.image)) {
            setImageSrc(defaultImage);
        }
    }, [product.image]);

    const handleImageError = () => {
        setImageSrc(defaultImage);
    };

    return (
        <div className="product-card">
            <img
                src={imageSrc}
                alt={product.product_name}
                className="product-image"
                onError={handleImageError}
            />
            <div className="product-details">
                <h2 className="product-name">{product.product_name}</h2>
                <p className="product-brand"><b>Brand:</b> {product.brand}</p>
                <p className="product-category"><b>Category:</b> {product.category}</p>
                <StarRatings
                    rating={numberOfStars}
                    starRatedColor="var(--color-lighter)"
                    numberOfStars={numberOfStars}
                    starDimension="20px"
                    starSpacing="2px"
                />
                <p className="product-price">${product.price}</p>
                <Link to={`/items/${product.id}`} className="view-details-link">View Details</Link>
            </div>
        </div>
    );
}

export default ProductCardComponent;
