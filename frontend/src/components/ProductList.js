import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductComponent from './ProductComponent';

const ProductList = () => {
    const url = "http://localhost:8080/api/products/findAll";
    const url2 = "http://localhost:8080/api/products/delete?";
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(url, {
                headers: {
                  'Access-Control-Allow-Origin': 'http://localhost:3000',
                  // Add other headers if needed
                }
              }); // Replace with your API endpoint
            setProduct(response.data);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []);

      // const handleDelete = async (product) => {
      //   setProduct(product.filter((p) => p._id !== product._id));
      //   await axios.delete(url2/product._id, {
      //     headers: {
      //       'Access-Control-Allow-Origin': 'http://localhost:3000',
      //       // Add other headers if needed
      //     }
      //   });
      // };
    
  return (
    <div>
      {product.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
