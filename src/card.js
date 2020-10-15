// @flow

import React from 'react';



const Card = (props) => {
  // Can only return one element per react component, unless it's an array presumably
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot avatar" src={`"https://robohash.org/${props.id}?200x200"`}></img>
      <h2>{props.name} : {props.id}</h2>
      <p>{props.email}</p>
      <p>I weight {props.weight} pounds!</p>
    </div>
  );
}

export default Card;