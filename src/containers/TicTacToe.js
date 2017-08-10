import React, {Component} from 'react';
import {Stage} from 'react-konva';
import {Board, Squares} from '../styled/TicTacToe'

class TicTacToe extends Component {

  // helper function to help make game's rules function
  // this will check to see if someone has won or not(all of the winning combination)
  constructor(props) {
    super(props)
    this.combos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ] // end this.combos
  } // end constructor

  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }

  componentWillMount() {
    // when my component mounts do these to the DOM
    let height = window.innerHeight // size of bowser's vertically
    let width = window.innerWidth
    let size = (height < width) ? height * .8 : width * .8
    let rows = this.state.rows
    let unit = size / rows
    let coordinates = []
    // adding the Squares
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        coordinates.push([x*unit, y*unit])
      } // end x for loop
    } // end y for loop

    this.setState({
      size,
      rows,
      unit,
      coordinates
    }) //end this.setState
  };

  move = (index, marker) => {
    this.setState((prevState, prop) => {
      let {gameState, yourTurn, gameOver, winner} = prevState
      yourTurn = !yourTurn
      gameState.splice(index, 1, marker)
      let foundWin = this.winChecker(gameState)
      if (foundWin) {
        winner = gameState[foundWin[0]]
      }
      if (foundWin || !gameState.includes(false)) {
        gameOver = true
      }
      if (!yourTurn && !gameOver) {
        this.makeAiMove(gameState)
      }
      return {
        gameState,
        yourTurn,
        gameOver,
        win: foundWin || false,
        winner
      } // end return
    }) // end this.setState
  } // end move

  // AI's movement
  makeAiMove = (gameState) => {
    let otherMark = this.state.otherMark
    let openSquares = []
    gameState.forEach((square, index)=> {
      if(!square) {
        openSquares.push(index)
      }
    }) // end openSquares
    let aiMove = openSquares[this.random(0, openSquares.length)]
    // make AI wait a second or two before making its move, 1000 = 1 milisec
    setTimeout(()=>{
      this.move(aiMove, otherMark)
    }, 1000)
  } // end makeAiMove

  // generate random number
  random = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min)) + min
  } // end random

  // check to see winner
  winChecker = (gameState) => {
    let combos = this.combos
    return combos.find((combo)=>{
      let [a,b,c] = combo
      return (gameState[a] === gameState[b] && gameState[a] === gameState[c] && gameState[a])
    }) // end combos.find
  } // end winChecker

  turingTest = () => {
    // placeholder
  };

  recordGame = () => {
    // placeholder
  };

  render() {
    let {
      size,
      unit,
      rows,
      coordinates,
      gameState,
      win,
      gameOver,
      yourTurn,
      ownMark
    } = this.state;
    return (
      <div>
        <Stage
          width={size}
          height={size}
        >
          <Board
            unit={unit}
            rows={rows}
            size={size}
          />
          <Squares
            unit={unit}
            coordinates={coordinates}
            gameState={gameState}
            win={win}
            gameOver={gameOver}
            yourTurn={yourTurn}
            ownMark={ownMark}
            move={this.move}
          />
        </Stage>
      </div>
    ) // end return
  } // end render
} // end Template

export default TicTacToe
