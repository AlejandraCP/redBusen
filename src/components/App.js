import React, { Component } from 'react';
import Header from './Header';
import Informative from './Informative';
import InternetBanking from './InternetBanking';
import PayCash from './PayCash';
import Footer from './Footer';

import '../css/ed-grid.min.css';
import '../css/main.css';

import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className='contenedor'>
          <ul className='ed-container select'>
            <li className='ed-item s-50 m-30'>
              <NavLink
                to='/internet'
                activeClassName='active'
                className='linkNav'
              >
                {' '}
                Banca por internet{' '}
              </NavLink>
            </li>
            <li className='ed-item s-50 m-70'>
              <NavLink
                to='/paycash'
                activeClassName='active'
                className='linkNav'
              >
                Pagar en efectivo
              </NavLink>
            </li>
          </ul>
          <hr className='ed-container' />
          <Informative />
          <Switch>
            <Route path='/internet' component={InternetBanking} />
            <Route path='/paycash' component={PayCash} />
            <Redirect from='/' to='/internet' />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
