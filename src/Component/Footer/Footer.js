import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-5 mt-5">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h3 className="text-uppercase">About Us</h3>
        <p>We are a team of developers who love to create amazing websites and apps. We believe in delivering the best user experience possible.</p>
      </div>
      <div className="col-md-4">
        <h3 className="text-uppercase">Contact Us</h3>
        <p>Email: daimondinfo@ourcompany.com</p>
        <p>Phone: +880017********</p>
        <p>Address: 32/4 Main Street, Malibag, Daka</p>
      </div>
      <div className="col-md-4">
        <h3 className="text-uppercase">Follow Us</h3>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">
              <FaFacebook className='text-white fs-1 m-2'></FaFacebook>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <FaTwitter className='text-white fs-1 m-2'></FaTwitter>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <FaInstagram className='text-white fs-1 m-2'></FaInstagram>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    );
};

export default Footer;