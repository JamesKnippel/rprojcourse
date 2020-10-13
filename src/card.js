import React from 'react';

const Card = (props) => {
  // Can only return one element per react component, unless it's an array presumably
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot pic" src="https://robohash.org/test?200x200"></img>
      <h2>Test Name</h2>
      <p>Blah blah biography</p>
      <p>I weight {props.weight} pounds!</p>
    </div>
  );
}

export default Card;