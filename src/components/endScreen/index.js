import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class EndScreen extends Component {
  render() {
    if (!this.props.location.state || !this.props.location.state.fromGame) {
      return <Redirect to="/" />;
    }
    return (
      <div className="endScreen">
        <h1>Game over</h1>
        <Link
          to={{
            pathname: "/"
          }}
        >
          Play again
        </Link>
      </div>
    );
  }
}

export default EndScreen;
