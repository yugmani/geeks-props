import React from 'react';
import './style.css';

export default function App(props) {
  return (
    <div>
      <h1>Hello {props.user}👨!</h1>
      <p>Start editing to see some magic happen 😊</p>
    </div>
  );
}
