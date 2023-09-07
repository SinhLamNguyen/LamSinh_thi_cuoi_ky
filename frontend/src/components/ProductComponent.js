import axios from 'axios';
import React, { useState } from 'react'

const ProductComponent = ({ product }) => {
    
    return (
        <div style={{
            display: 'inline-block', wordWrap: 'break-word',
            padding: '10px', width: '250px',
            height: '250px', marginRight: '10px', marginTop: '10px'
        }}>
            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={product.image} alt={product.name} />
            <h3 style={{
                maxWidth: '100%', maxHeight: '60px',
                display: '-webkit-flex', overflow: 'auto',
                maxLines: 3, textOverflow: 'ellipsis',
                wordWrap: 'break-word', margin: 'auto'
            }} >{product.name}</h3>

            <p> Loại sản phẩm: {product.type}</p>
            <p> Mô tả: {product.desc}</p>
            <p> Giá: {product.price} Đồng</p>

            <button className="btn btn-primary"> ADD </button>
            <button className="btn btn-secondary"> UPDATE </button>
            <button className="btn btn-danger"> DELETE </button>
        </div>
    );
};

export default ProductComponent;
