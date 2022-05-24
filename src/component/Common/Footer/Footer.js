/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import footerBg from "../../../assets/images/bg.png";

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer
      className="bg-no-repeat bg-cover bg-center px-12"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="footer p-10 text-neutral-content ">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div className="footer footer-center p-4 text-base-content">
        <div>
          <p>Copyright © {year} - All right reserved by Nur Mohammad Rayhan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
