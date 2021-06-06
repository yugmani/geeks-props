import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends React.Component {
  render() {
    return (
      <div className="parent">
        <p>It is Parent Component </p>
        <h3>You are my kids!</h3>
        <p>I 💚 you guys.</p>
        <ChildComponent name="Prasiddha" />
        <ChildComponent name="Prayash" />
      </div>
    );
  }
}
