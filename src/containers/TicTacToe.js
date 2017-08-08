import React, {Component} from 'react';
import {Stage} from 'react-konva';
import {Board} from '../styled/TicTacToe'

class TicTacToe extends Component {

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
    // when my component mounts
    let height = window.innerHeight // size of bowser's vertically
    let width = window.innerWidh
    let size = (height < width) ? height * .9 : width * .8
    let rows = this.state.rows
    let unit = size / rows

    this.setState({
      size,
      rows,
      unit
    }) //end this.setState
  }

  move = () => {
    // placeholder
  }

  makeAiMove = () => {
    // placeholder
  }

  turingTest = () => {
    // placeholder
  }

  recordGame = () => {
    // placeholder
  }

  render() {
    let {
      size,
      unit,
      rows
    } = this.state
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
          {/*<Square/>*/}
        </Stage>
      </div>
    ) // end return
  } // end render
} // end Template

export default TicTacToe
