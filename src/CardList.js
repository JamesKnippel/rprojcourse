import React, { Component } from 'react';
import Card from './card'

const CardList = ({ robots }) => {
  const cardIterator = robots.map((robot, i) => {
    return <Card weight={Math.random()} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  })
    return (
    <div>
      {/* <Card weight={Math.random()} id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card weight={Math.random()} id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card weight={Math.random()} id={robots[2].id} name={robots[2].name} email={robots[2].email}/> */}
      {cardIterator}
      <Card weight={Math.random()}/>
      <Card weight={Math.random()}/>
    </div>
    );
  
}

export default CardList;