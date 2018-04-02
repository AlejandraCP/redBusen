import React from 'react';
import '../css/ed-grid.min.css';
import '../css/main.css';
import dataInfo from '../data/informative.json';

const info = {
  dataInfo
};

const reSizeCod = () => {
  let sizeNumber = 24;
  let numberDigits = info.dataInfo.cod.toString().length;
  switch (numberDigits) {
    case 8:
      return sizeNumber;
    case 9:
      return (sizeNumber -= 5);
    case 10:
      return (sizeNumber -= 10);
    case 11:
      return (sizeNumber -= 13);
    case 12:
      return (sizeNumber -= 16);
    case 13:
      return (sizeNumber -= 19);
  }
  return sizeNumber;
};

const reSizePrice = () => {
  let sizePrice = 20;
  let numberDigits = info.dataInfo.price.length;
  switch (numberDigits) {
    case 7:
      return sizePrice;
    case 8:
      return (sizePrice -= 3);
    case 9:
      return (sizePrice -= 6);
    case 10:
      return (sizePrice -= 8);
  }
  return sizePrice;
};

const date =
  new Date().getDate() +
  2 +
  ' ' +
  new Date().toLocaleString('en-pe', { month: 'long' });

const showTime = () => {
  let timeNow = new Date();
  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let timeString = '' + (hours > 12 ? hours - 12 : hours);
  timeString += (minutes < 10 ? ':0' : ':') + minutes;
  timeString += hours >= 12 ? ' P.M.' : ' A.M.';
  return timeString;
};

const Informative = () => {
  return (
    <ul className='ed-container cross-center content-info'>
      <li className='ed-item s-35 cross-center'>
        <p>
          <span>Payment code</span>
          <br />{' '}
          <span style={{ fontSize: reSizeCod() + 'px' }}>
            {info.dataInfo.cod}
          </span>
        </p>
      </li>
      <li className='ed-item s-25 cross-center'>
        <p>
          TOTAL <br /> S/.<span style={{ fontSize: reSizePrice() + 'px' }}>
            {info.dataInfo.price}
          </span>
        </p>
      </li>
      <li className='ed-item s-40 cross-center'>
        <p>
          <span>
            {' '}
            <img src='./assets/icons/alarm.svg' alt='' className='alarm' />{' '}
          </span>{' '}
          Your order will expire: <br />{' '}
          <span>
            {date} - {showTime()}
          </span>
        </p>
      </li>
    </ul>
  );
};
export default Informative;
