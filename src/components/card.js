// @flow

import React from 'react';



const Card = ({ name, email, id}, props) => {
  // Can only return one element per react component, unless it's an array presumably
  // const { name, email, id } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot avatar" src={`https://robohash.org/${id}?200x200`}></img>
      <h2>{name} : {id}</h2>
      <p>{email}</p>
      <p>I weight {props.weight} pounds!</p>
    </div>
  );
}

export default Card;