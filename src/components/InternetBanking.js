import React, { Component } from 'react';
import SliderPay from './children/slider';
import Slider from 'react-slick';
import dataBankInternet from '../data/dataInternet.json';
import dataInfo from '../data/informative.json';

import '../css/ed-grid.min.css';
import '../css/main.css';


class InternetBanking extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      text: ['Select your bank']
    }

    this.show = this.show.bind(this)
  }
  show(e) {
    let element = e.target.dataset.name;
    let data = dataBankInternet.dataInternet;
    data.map((value, i) => {
      if (value.bank === element) {
        console.log(value.text);
        this.setState({
          text: value.text
        })
      }
    });
  }
  render() { 
    const imagesArray = {
      dataBankInternet
    };

    const info = {
      dataInfo
    };

    return (
      <div className='ed-container selec-pay'>
        <p>Select your bank</p>
        <a className="prev"> <i className="fas fa-angle-left"></i></a>
        <Slider className='ed-container ed-item cross-center slider'>
          <SliderPay imgArray={imagesArray.dataBankInternet.dataInternet} show={this.show} />
        </Slider>
        <a className="next"> <i className="fas fa-angle-right"></i></a>
        <div className='box-description'>
          <p>You can pay through the web or the mobile app of each Bank</p>
          <p>Payment Instructions</p>
          <ol>
            <li><span className='number'>1</span>{this.state.text}</li>
            <li><span className='number'>2</span>Enter your CIP code: <span>{info.dataInfo.cod}</span> and follow the instructions</li>
          </ol>
        </div>
        <div className='ed-container bpi'>
          <a href='#'>Go to online Banking</a>
        </div>
      </div>
    )

  }

}

export default InternetBanking;
