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
      text: ['Selecciona un banco']
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
        <p>Selecciona dónde quieres pagar</p>
        <a className="prev"> <i className="fas fa-angle-left"></i></a>
        <Slider className='ed-container ed-item cross-center slider'>
          <SliderPay imgArray={imagesArray.dataBankInternet.dataInternet} show={this.show} />
        </Slider>
        <a className="next"> <i className="fas fa-angle-right"></i></a>
        <div className='box-description'>
          <p>Puedes pagar desde la Web o App móvil del Banco</p>
          <p>Instrucciones de Pago</p>
          <ol>
            <li><span className='number'>1</span>{this.state.text}</li>
            <li><span className='number'>2</span>Ingresa tu código CIP: <span>{info.dataInfo.cod}</span> y sigue los pasos</li>
          </ol>
        </div>
        <div className='ed-container bpi'>
          <a href='#'>Ir a banca por internet</a>
        </div>
      </div>
    )

  }

}

export default InternetBanking;
