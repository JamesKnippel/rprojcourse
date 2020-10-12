import React from 'react';

const Card = (props) => {
  // Can only return one element per react component, unless it's an array presumably
  return (
    <div>
      <img alt="robot pic" src="https://robohash.org/test?200x200"></img>
      <h2>Test Name</h2>
      <p>Blah blah biography</p>
    </div>
  );
}

export default Card;