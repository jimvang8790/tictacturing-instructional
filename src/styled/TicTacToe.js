import React from 'react';
import {Layer, Line, Text} from 'react-konva';

// specify the different parts of props that will be used in board
export const Board = ({
  unit,
  size,
  rows
}) => {

  // initialize the grid variable that was reference on line 8 with empty array
  let grid = []

  // initialize line color in konva with css color name
  let stroke = 'gray'
  let strokeWidth = 10

  // calculating having this array of lines each with the coordinates about where they should go
  // for loop will dynamically devise from the units, size, and rows.
  for(let i = 1; i < rows; i++) {
    // starting and end point of lines
    let position = unit * i
    // adding a line to the grid array
    grid.push (
      // key must be unique
      <Line
        points={[position, 0, position, size]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i+'v'}
      />
    ) // end first grid.push
    grid.push(
      <Line
        points={[0, position, size, position]}
        stroke={stroke}
        strokeWidth={strokeWidth}
        key={i+'h'}
      />
    )// end second grid.push
  } // end for loop

  return (
    <Layer>
      {grid}
    </Layer>
  ) // end return
} // end const Board

export const Squares = ({
  unit,
  coordinates,
  gameState,
  win,
  gameOver,
  yourTurn,
  ownMark,
  move
}) => {
  let squares = coordinates.map( (position, index) => {
    let makeMove = move
    let mark = gameState[index]
    let fill = 'black'
    if (win && win.includes(index)) {
      fill = 'lightgreen'
    }
    if (gameOver || !yourTurn || mark) {
      makeMove = () => console.log('Nope!')
    }
    return (
      <Text
        key={index}
        index={index}
        x={position[0]}
        y={position[1]}
        fontSize={unit}
        width={unit}
        text={mark}
        fill={fill}
        fontFamily={'Helvetica'}
        align={'center'}
        onClick={(event)=>{
          let index = event.target.index
          makeMove(index, ownMark)
        }}
        />
  ) // end let return
  }) // end let squares
  return (
    <Layer>
      {squares}
    </Layer>
  ) // end return
} // end const Squares
