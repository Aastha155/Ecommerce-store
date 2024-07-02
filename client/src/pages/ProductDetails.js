import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = ({ match }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        };
        fetchProduct();
    }, [match.params.id]);

    return (
        <div>
            <img src={product.imageUrl} alt={product.name} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;
