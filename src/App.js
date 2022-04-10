import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor(){
    super();

    this.state = {
      name: { firstname: 'Leonardo', lastname: 'Guilarte'},
      company: 'NetRed'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
          <p>Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}</p>
          <button 
            onClick={() => {
              this.setState(() => {
                return {
                  name: {firstname: 'Pedro', lastname: 'Perez'},
                };
              });
            }}  
          >
            Change name
          </button>
        </div>      
      </div>
    );
  }
}

export default App;
