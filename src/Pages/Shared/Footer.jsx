import React from 'react';
import logo from '../../assets/Logo/Footer_logo.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <img src={logo} alt="" />
                    <p>
                        MediEase Industries Ltd.
                        <br />
                        Providing reliable tech since 2001
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by MediEase Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;