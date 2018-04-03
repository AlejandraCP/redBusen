import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
// import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css'

const settings = {
  // dots: true,
  infinite: true,
  centerPadding: '60px',
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
  // prevArrow: $('.prev'),
  // nextArrow: $('.next')
};

const SliderPay = ({ imgArray, show }) => (
  <div>
    <Slider {...settings} className="ed-container cross-center">
      {imgArray.map((val, i) => (
        <div key={i}>
          <img
            src={val.image}
            data-name={val.bank}
            onClick={show}
            className="style-img"
          />
        </div>
      ))}
    </Slider>
  </div>
);

SliderPay.propTypes = {
  imgArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  show: PropTypes.func.isRequired
};

export default SliderPay;
