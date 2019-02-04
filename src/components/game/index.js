import React, { Component } from "react";
import Table from "../table";
import { Redirect } from "react-router-dom";

class Game extends Component {
  state = {
    field: [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ],
    player: 1,
    count: 0,
    gameOver: false
  };

  clickColumn = i => {
    const newField = [...this.state.field];
    const currentColumn = newField[i];
    const lastIndex = currentColumn.lastIndexOf(0);
    currentColumn[lastIndex] = this.state.player;
    newField[i] = currentColumn;
    this.setState({ field: newField, player: this.state.player === 1 ? 2 : 1 });
  };

  onClickButton = () => {
    this.setState({ gameOver: true });
  };

  render() {
    if (
      !this.props.location.state ||
      !this.props.location.state.fromStartScreen
    ) {
      return <Redirect to="/" />;
    }

    if (this.state.gameOver) {
      return (
        <Redirect
          to={{
            pathname: "/end",
            state: {
              fromGame: true
            }
          }}
        />
      );
    }

    return (
      <>
        <h1>Игрок 1 - {this.props.location.state.userName1} </h1>
        <h1>Игрок 2 - {this.props.location.state.userName2} </h1>
        <Table field={this.state.field} onClickColumn={this.clickColumn} />
        <button className="player 1" onClick={this.onClickButton}>
          player 1
        </button>
      </>
    );
  }
}

export default Game;
