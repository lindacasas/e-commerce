import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetailComponent from '../components/ProductDetailComponent';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const RoutesIndex = ({ products, error }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home products={products} error={error} />}
            />
            <Route
                path="/items/:id"
                element={<ProductDetailComponent />}
            />
            <Route path="/login" element= {<Login />}/>
            <Route path="/register" component={<Signup />} />
        </Routes>
    );
};

export default RoutesIndex;
