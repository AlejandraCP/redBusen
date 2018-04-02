import React from 'react';
import '../css/ed-grid.min.css';
import '../css/main.css';

const Footer = () => {
  return (
    <div>
      <p className='ed-item print'>
        Instructions{' '}
        <img
          src='./assets/icons/printer.svg'
          alt=''
          onClick={() => window.print()}
        />{' '}
      </p>
      <ul className='ed-container cross-center contact'>
        <li className='ed-item l-30'>
          Instructions{' '}
          <img
            src='./assets/icons/printer.svg'
            alt=''
            onClick={() => window.print()}
          />{' '}
        </li>
        <li className='ed-item s-60 l-40'>
          Assistance:{' '}
          <a href='mailto:contacto@redbus.pe'>
            <span>contacto@redbus.pe</span>
          </a>{' '}
        </li>
        <li className='ed-item s-40 l-30'>
          {' '}
          Payment by <img src='./assets/icons/pagoEfectivo.png' alt='' />{' '}
        </li>
      </ul>
    </div>
  );
};
export default Footer;
