import React from'react';
import Language from'./children/Language';
import'../css/ed-grid.min.css';
import'../css/main.css';

const Header = () => {
  return (
    <div>
      <div className='main-header cross-center'>
        <div className='ed-container full'>
          <div className='ed-item s-50 m-50 cross-center'>
            <img
              src='./assets/icons/logoRedBus.png'
              alt='Redbus'
              className='logo'
            />
            <img
              src='./assets/icons/logoRedBus2.png'
              alt=''
              className='logo'
            />
          </div>
          <Language />
        </div>
      </div>
      <div className='ed-container cross-center pago-efectivo-logo'>
        <img src='./assets/icons/pagoEfectivo.png' />
      </div>
    </div>
  );
};
export default Header;
