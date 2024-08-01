import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from './routes/RoutesIndex';
import NavBarComponent from './components/NavBarComponent';
import { AuthProvider } from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import { getProductsService } from './services/products';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsService();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredProducts(products);
      return;
    }

    const searchResults = products.filter(product => {
      const searchLower = searchTerm.toLowerCase();
      return (
        product.product_name.toLowerCase().includes(searchLower) ||
        product.brand.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        product.price.toString().includes(searchTerm)
      );
    });

    setFilteredProducts(searchResults);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBarComponent onSearch={handleSearch} />
        <div className="container" style={{ marginTop: '70px' }}>
          <RoutesIndex products={filteredProducts} error={error} />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
