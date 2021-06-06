import React from 'react';

function ChildComponent(props) {
  return (
    <div className="child">
      <p>It is Child Component</p>
      <h4>My son's name is {props.name}</h4>
    </div>
  );
}

export default ChildComponent;
