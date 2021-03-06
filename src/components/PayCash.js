import React , {Component} from 'react';
import SliderPay from './children/slider';
import Slider from 'react-slick';
import dataCash from '../data/dataCash.json';
import dataInfo from '../data/informative.json';

import '../css/ed-grid.min.css';
import '../css/main.css';

 

class PayCash extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      text: [],
      text2: []
    }

    this.show = this.show.bind(this)
  }
  show(e) {
    let element = e.target.dataset.name;
    let data = dataCash.dataCash;
    data.map((value, i) => {
      if (value.bank === element) { 
        this.setState({
          text: value.text,
          text2: value.text2
        })
      }
    });
  }
  render() { 
    const imagesArray = {
      dataCash
    };

    const info = {
      dataInfo
    };

    return (
      <div className='ed-container selec-pay'>
        <p>Select your bank</p>
        <a className=""></a>
        <Slider className='ed-container cross-center slider'>
          <SliderPay imgArray={imagesArray.dataCash.dataCash} show={this.show} />
        </Slider>
        <a className=""></a>
        <div className='box-description-cash'>
          <p>Payment Instructions</p>
          <ol>
            <li>
             State that you are going to make a payment with the company PAGOEFECTIVO
            </li>
            <li>
             Provide the CIP code:{' '}
              <span>{info.dataInfo.cod}</span> and the ammount to be paid in soles.
            </li>
          </ol>
          <p>{this.state.text}</p>
          <p>{this.state.text2}</p>
        </div>
        <div className='ed-container bpi'>
          <a
            href='https://ubicanos.pagoefectivo.pe/#/?tienda=[idServicio]&moneda=1&monto=100.00&ubicame=true&_k=ws2owh'
            target='_blank'
            rel='noopener noreferrer'
          >
          Find your payment point
          </a>
        </div>
      </div>
    )

  }


}

export default PayCash;