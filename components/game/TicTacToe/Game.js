import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// square component
// todo, add borders
// todo, make into squares
const Square = props => {
  return <Button title={props.value} onPress={props.onPress}></Button>;
};

// board component with logic
const Board = props => {
  const [tttGameState, setTttGameState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
    loading: true,
    playerOne: "Haakon",
    playerTwo: "Markus"
  });

  const handlePress = n => {
    const squares = tttGameState.squares.slice();
    if (calculateWinner(squares) || squares[n]) {
      return;
    }
    squares[n] = tttGameState.xIsNext ? "X" : "O";
    setTttGameState({
      ...tttGameState,
      squares: squares,
      xIsNext: !tttGameState.xIsNext
    });
  };

  // fancy function that converts null to string
  // todo, remove this when button is replaced with something else
  const convertToString = n => {
    if (n) {
      return n;
    }
    return "";
  };

  const renderSquare = n => {
    return (
      <Square
        value={convertToString(tttGameState.squares[n])}
        onPress={() => handlePress(n)}
      />
    );
  };

  const winner = calculateWinner(tttGameState.squares);
  let status;
  let statusPlayer;
  if (winner) {
    status =
      "Winner: " +
      (tttGameState.xIsNext ? tttGameState.playerTwo : tttGameState.playerOne);
  } else {
    status = "Next player: " + (tttGameState.xIsNext ? "X" : "O");
    statusPlayer =
      "(" +
      (tttGameState.xIsNext ? tttGameState.playerOne : tttGameState.playerTwo) +
      ")";
  }

  return (
    <View>
      <Text style={styles.playerStatus}>{status}</Text>
      <Text style={styles.player}>{statusPlayer}</Text>
      <View style={styles.gameBoard}>
        <View style={styles.col1}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.col2}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.col3}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
    </View>
  );
};

const Game = props => {
  return (
    <View>
      <View style={styles.game}>
        <Board />
      </View>
    </View>
  );
};

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const styles = StyleSheet.create({
  playerStatus: {
    fontSize: 50,
    marginBottom: 10,
    textAlign: "center"
  },
  player: {
    fontSize: 20,
    marginBottom: 50,
    textAlign: "center"
  },
  game: {
    backgroundColor: "grey",
    height: 750,
    justifyContent: "center"
  },
  gameBoard: {
    flexDirection: "row",
    backgroundColor: "grey",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  col1: {
    backgroundColor: "powderblue",
    width: 125
  },
  col2: {
    backgroundColor: "skyblue",
    width: 125
  },
  col3: {
    backgroundColor: "yellow",
    width: 125
  }
});

export default Game;
