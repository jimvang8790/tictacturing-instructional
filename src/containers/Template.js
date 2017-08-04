import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavDrawer from '../components/NavDrawer.js';
import {Header, Main} from '../styled/Template'

injectTapEventPlugin();

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer/>
          <Header>
            TicTacTuring
          </Header>
          <Main>
            {this.props.children}
          </Main>
        </div>
      </MuiThemeProvider>
    ) // end return
  } // end render
} // end Template

export default Template


// import RaisedButton from 'material-ui/RaisedButton';
// <header>
//   <h1>TicTacTuring</h1>
//   <RaisedButton
//     label={'Test Button'}
//     primary={true}
//     onTouchTap={()=>{console.log('Hello, I work')}}
//   />
// </header>
