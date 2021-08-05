import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('https://floating-garden-34216.herokuapp.com/product/' + productKey)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [productKey])
    //const [loading, setLoading] = useState();
    //const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    document.title = "product details";
    return (
        <div>
            <h2>Your Product Details.</h2>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;