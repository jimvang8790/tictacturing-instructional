import React from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

// calling upon the styled components library and div indicate which type of html element should be style
// the `` indicate template literal - a special kind of sting that allows insert JavaScript into it
// normal CSS can be written
const StayVisible = styled.div`
  position: absolute;
  margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none' };
  transition: margin .2s;
`


export const NavToggleButton = (props) => {
  return (
    <StayVisible
      // open={props.open}
      // width={props.width}
      {...props} // another way of writing the codes above
    >
      <FloatingActionButton
        onTouchTap={props.toggle}
      >
        <Menu/>
      </FloatingActionButton>
    </StayVisible>
  ) // end return
} // end export
