import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [view, setView] = useState('grid');

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <button onClick={() => setView(view === 'grid' ? 'list' : 'grid')}>
                Toggle View
            </button>
            <div className={view === 'grid' ? 'grid' : 'list'}>
                {products.map(product => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
