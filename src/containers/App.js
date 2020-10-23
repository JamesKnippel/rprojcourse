import React, { Component } from "react";


// Components
import CardList from "../components/CardList";
import ErrorBoundary from "../ErrorBoundary";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";


// Redux
import { connect } from "react-redux";
import { setSearchField } from "../redux/actions";

 // paints the props according to redux store
  const mapStateToProps = state => {
    return {
      searchField: state.searchField,
    };
  };

  // Launches an action or function containing an action via event.
  const mapDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    };
  };


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  };

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1> RoboFriends </h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App); // accepts two params 1) MapStatetoProps, 2) mapDispatchToProps
