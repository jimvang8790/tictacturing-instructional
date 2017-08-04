import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router'; //internal link
import {NavToggleButton} from '../styled/NavDrawer';

class NavDrawer extends Component {
  state = {
    open: true, // drawer will be open on page load
    width: 250 // in px
  } // end state

  toggle = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open // if open=true ---> now make it false vice versa if open=false ---> now make it true
      } // end return
    }) // end setState
  } // end toggle

  render () {
    return (
      <div>
        <NavToggleButton
          toggle={this.toggle}
          width={this.state.width}
          open={this.state.open}
        />
        <Drawer
          open={this.state.open}
          width={this.state.width}
        >
          <div
            style={{
              height: '200px',
              width: '100%',
              backgroundColor: 'salmon'
            }}
          >
            LoginContainer
          </div>
          <Divider/>
            <Link
              to={'/'}
            >
              <MenuItem
                onTouchTap={this.toggle} // when play is hit drawer will close
                primaryText={'Play'}
              />
            </Link>
            <Link
              to={'/profile'}
            >
              <MenuItem
                onTouchTap={this.toggle} // when profile is hit drawer will close
                primaryText={'Profile'}
              />
            </Link>
        </Drawer>
      </div>
    ); // end return
  } // end render
} // end NavDrawer

export default NavDrawer
