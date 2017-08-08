import React, {Component} from 'react';
import {Stage} from 'react-konva';

class TicTacToe extends Component {

  state = {
    rows: 3
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
      units
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
    return (
      <div>
        <Stage
          width = {}
          height = {}
        >
          {/*  <Board/> */}
          {/*  <Square/> */}
        </Stage>
      </div>
    ) // end return
  } // end render
} // end Template

export default TicTacToe
