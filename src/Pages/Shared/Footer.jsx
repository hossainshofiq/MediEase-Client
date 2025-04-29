import React from 'react';
import logo from '../../assets/Logo/Footer_logo.png'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <img src={logo} alt="MediEase Logo" />
                    <p>
                        MediEase Industries Ltd.
                        <br />
                        Your trusted partner for healthcare products.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Shop</h6>
                    <a href='/shop' className="link link-hover">Browse Medicines</a>
                    <a href='' className="link link-hover">Categories</a>
                    <a href='' className="link link-hover">Top Sellers</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a href='/about' className="link link-hover">About Us</a>
                    <a href='/contact' className="link link-hover">Contact Us</a>
                    <a href='/faq' className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a href='/terms&conditions' className="link link-hover">Terms and Conditions</a>
                    <a href='/privacyPolicy' className="link link-hover">Privacy policy</a>
                    <a href='/imprint' className="link link-hover">Imprint</a>
                </nav>
                {/* <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                    <a className="link link-hover">Licenses</a>
                </nav> */}
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-2 lg:gap-4">
                        <a href='https://www.facebook.com/A.H.Shofiq/' target='blank' className='hover:cursor-pointer text-3xl'>
                            <FaFacebook className='text-blue-600'></FaFacebook>
                        </a>
                        <a href='https://www.linkedin.com/in/hossainshofiq/' target='blank' className='hover:cursor-pointer text-3xl'>
                            <FaLinkedinIn className='text-blue-600'></FaLinkedinIn>
                        </a>
                        <a href='https://github.com/hossainshofiq' target='blank' className='hover:cursor-pointer text-3xl'>
                            <FaGithub ></FaGithub>
                        </a>
                    </div>
                </nav>
            </div>
            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by MediEase Industries Ltd.</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
