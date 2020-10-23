import React, { useState, useEffect } from "react";

// Redux
import { connect } from "react-redux";
import { setSearchField } from "../redux/actions";

// Components
import CardList from "../components/CardList";
import ErrorBoundary from "../ErrorBoundary";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

function App(props) {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }

  // componentDidMount() {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((users) => this.setState({ robots: users }));
  // }

  // paints the props according to redux store
  const mapStateToProps = (state) => {
    return {
      searchField: state.searchRobots.searchField,
    };
  };

  // Launches an action or function containing an action via event.
  const mapDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    };
  };

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);

  // useEffect functions identically to componentDidMount() within function components if you add an empty array[] as the second arg in the callback
  // monitor and manipulate state [robots, searchfield] or use nothing []
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
    console.log(count, props.store.getState());
  }, [count, props.store]); // Only run this fetch if count changes

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
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App); // accepts two params 1) MapStatetoProps, 2) mapDispatchToProps
