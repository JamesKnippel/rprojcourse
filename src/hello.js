import React, { Component } from 'react';
import "./hello.scss";

const Hello = (props) => {
    return (
      <div className="container">
        <h1>Hello World!</h1>
        <p>Wilkommen Auf der React</p>
        <p>{props.greeting}</p>
        <p>{props.secondExample}</p>
      </div>
    );
}

export default Hello;