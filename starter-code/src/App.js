import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './Components/ContactList';



class App extends Component {
 
  render() {

    return (
      <div className="App">
       <ContactList />
      </div>
    );
  }
}

export default App;
