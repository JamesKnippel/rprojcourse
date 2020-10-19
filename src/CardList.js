import React, { Component } from "react";
import Card from "./card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card
            key={i}
            weight={Math.random()}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
