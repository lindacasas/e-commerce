import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import defaultImage from '../assets/img-ecm.png';
import '../styles/ProductDetailComponent.css';

const ProductDetailComponent = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { id } = useParams();
    const [productDetailData, setProductDetailData] = useState(null);
    const [imageSrc, setImageSrc] = useState(defaultImage);

    const requestProductDetailData = async () => {
        try {
            const response = await axios.get(`${API_URL}/items/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProductDetailData(response.data);
            setImageSrc(isValidImageUrl(response.data.image) ? response.data.image : defaultImage);
        } catch (error) {
            console.log('An error occurred', error);
        }
    };

    const isValidImageUrl = (url) => {
        return (url && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png')));
    };

    useEffect(() => {
        requestProductDetailData();
    }, [id]);

    const handleImageError = () => {
        setImageSrc(defaultImage);
    };

    if (!productDetailData) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <div className="product-detail-img">
                <img
                    src={imageSrc}
                    alt={productDetailData.product_name}
                    className="product-detail-image"
                    onError={handleImageError}
                />
            </div>
            <div className="product-detail-info">
                <h1 className="product-detail-name">{productDetailData.product_name}</h1>
                <p className="product-detail-description">{productDetailData.description}</p>
                <p className="product-detail-brand"><b>Brand:</b> {productDetailData.brand}</p>
                <p className="product-detail-category"><b>Category:</b> {productDetailData.category}</p>
                <p className="product-detail-price"><b>Price:</b> ${productDetailData.price}</p>
                <button className="btn-add-to-cart" >Buy</button>
            </div>
        </div>
    );
};

export default ProductDetailComponent;


