import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="mb-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-2xl hover:text-blue-500"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-2xl hover:text-blue-400"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 text-2xl hover:text-blue-700"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-sm mb-4">
          <p>Address: 123 Business St, City, Country</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@innohub.com</p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          &copy; 2024 InnoHub Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
