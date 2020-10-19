import React, { Component } from 'react';
import Card from './card'

const CardList = ({robots }) => {
    return (
    <div>
      <Card weight={Math.random()} id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card weight={Math.random()} id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card weight={Math.random()} id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
      <Card weight={Math.random()}/>
      <Card weight={Math.random()}/>
    </div>
    );
  
}

export default CardList;