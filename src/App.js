import React from 'react';
import './style.css';
import ParentComponent from './components/ParentComponent';

export default function App(props) {
  return (
    <div className="app">
      <h1>Hello {props.user}👨!</h1>
      <p>Start editing to see some magic happen 😊</p>
      <ParentComponent />
      <div className="source">
        <a href="https://www.geeksforgeeks.org/reactjs-props-set-1/?ref=rp">
          Source: ReactJS | Props – Set 1{' '}
        </a>
      </div>
    </div>
  );
}
