import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">CỬA HÀNG SHỘP PI</h1>
      <nav className="nav">

        <ul className="nav-list" style={{marginRight: "500px"}}>
          <li>
          <img style={{width: "50px", height: "50px", margin: "10px"}} src="https://rubee.com.vn/admin/webroot/upload/image//images/tin-tuc/Shopee-logo-1.jpg" alt='myImage' />
          </li>
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>
        </ul>

        <ul className="nav-list" style={{marginLeft: "400px"}}>

          <li className="nav-item">
            <button className="btn btn-primary">Register</button>
          </li>

          <li className="nav-item">
            <button className='btn btn-primary'>Sign in</button>
          </li>

          <li>
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              style={{
                marginRight: "10px",
                width: "80%",
                fontSize: "18px",
                // marginLeft: "20px",
                marginTop: "20px",
              }}
            />
          </li>
          <li>
          <button className="btn btn-primary" style={{marginTop: "20px"}}>Search</button>
          </li>
        </ul>

      </nav>
    </header>
  );
};
