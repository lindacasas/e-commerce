import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import ProductCardComponent from "../components/ProductCardComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ products, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="home">
      {error && <p className="error-message">{error}</p>}
      <div className="product-list">
        {currentProducts.map((product) => (
          <ProductCardComponent key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination-container">
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default Home;
