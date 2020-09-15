import React, {Component} from 'react';
import './App.css';
import Nav from './Components/Nav/Nav'
import routes from './routes'
import 'reset-css'

export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Nav />
     {routes}


    </div>
   );
  }
}


