import React from 'react';
import Routes from './routes'

import Header from './components/header';

import './scss/styles.scss';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
