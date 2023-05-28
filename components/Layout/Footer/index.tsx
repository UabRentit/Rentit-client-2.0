import React from 'react';

const Footer = () => (
  <footer className="flex justify-between text-gray-400">
    <div className="flex">
      <a
        href="/privacy-policy"
        className="pr-16"
      >
        Privacy Policy
      </a>
      <a
        href="/terms-of-service"
        className="pr-16"
      >
        Terms of Service
      </a>
      <p>
        Need help?
        {' '}
        <a href="tel:1-800-555-5555">1-800-555-5555</a>
      </p>
    </div>
    <div className="">
      <p>
        © 2023 UAB Rentit. Visos teisės saugomos
      </p>
    </div>
  </footer>
);

export default Footer;
