import React, { Component } from 'react';
/*import{
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';*/
/*import Header from './components/header';
import Homepage from './components/homePage';
import Footer from './components/footer';*/

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

import './assets/css/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
            <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
