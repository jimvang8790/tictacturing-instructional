import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavDrawer from '../components/NavDrawer';
import {Header, Main} from '../styled/Template';
import Relay from 'react-relay';

injectTapEventPlugin();

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer
            auth={this.props.route.auth}
            authenticated={this.props.viewer.user}
          />
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

export default Relay.createContainer(
  Template, {
    fragments: {
      viewer: () => Relay.QL`
        fragments on Viewer {
          user {
            id
          }
        }
      `,
    } // end fragments
  } // end Template
) // end export
