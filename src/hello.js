import React, { Component } from 'react';
import "./hello.scss";

class Hello extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello World!</h1>
        <p>Wilkommen Auf der React</p>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

export default Hello;