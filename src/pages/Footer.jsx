import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <p className="copyright">
        Made with{' '}
        <span role="img" aria-label="thinking">
          ❤️
        </span>{' '}
        by {' '}
        <span className='change-color'>Kindness Okpugie</span>
      </p>
    </footer>
  )
};

export default Footer;