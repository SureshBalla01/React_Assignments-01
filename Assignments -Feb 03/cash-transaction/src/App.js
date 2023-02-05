import React from "react";
import { connect } from "react-redux";
import './App.css'

class App extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  render() {
    return (
      <div className="App">
        <div className="content">
        <h2>{this.props.count}</h2>
        <button onClick={this.increment} className="ui blue button">
          Deposit $10
        </button>
        <button onClick={this.decrement} className="ui red button">
          WithDraw $10
        </button>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: "$" + state.count
  };
};

export default connect(mapStateToProps)(App);