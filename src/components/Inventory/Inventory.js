import React from 'react';


const Inventory = () => {
    const product = {};
    const handleAddProduct = () =>{
        fetch('https://floating-garden-34216.herokuapp.com/addProduct',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }

    return (
        <form action="">
            <p><span>Name: </span><input type="text" /></p>
            <p><span>Price: </span><input type="text" /></p>
            <p><span>Quantity: </span><input type="text" /></p>
            <p><span>Product Image: </span><input type="file" /></p>
            <button onClick={handleAddProduct}>Add Product</button>
        </form>
    );
};

export default Inventory;