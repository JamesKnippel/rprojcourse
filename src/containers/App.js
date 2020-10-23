import React, { useState, useEffect } from "react";

import CardList from "../components/CardList";
import ErrorBoundary from "../ErrorBoundary";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);

  // componentDidMount() {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((users) => this.setState({ robots: users }));
  // }

  // useEffect functions identically to componentDidMount() within function components if you add an empty array[] as the second arg in the callback
  // monitor and manipulate state [robots, searchfield] or use nothing []
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => { setRobots(users) });
    console.log(count)
  }, [count]); // Only run this fetch if count changes

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
        <h1> RoboFriends </h1>
        <button onClick={()=>setCount(count+1)}>Click Me!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
