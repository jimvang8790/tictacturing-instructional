import React from 'react';
import {Layer, Line} from 'react-konva';

// specify the different parts of props that will be used in board
export const Board = ({unit, size, rows}) => {

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
