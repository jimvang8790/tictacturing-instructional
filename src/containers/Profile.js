import React, {Component} from 'react';
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile';

class Profile extends Component {

  // dumbie data
  static defaultProps = {
    user: {
      email: 'USER_EMAIL',
      games: [
        {
          winner: true,
          createdAt: '8/7/17',
          id: '0001'
        },
        {
          winner: true,
          createdAt: '8/8/17',
          id: '0002'
        },
        {
          winner: true,
          createdAt: '8/9/17',
          id: '0003'
        },
      ] // end game
    } // end user
  } // end static defaultProps

  render() {
    let {email} = this.props.user
    return (
      <Container>
        <Name>
          {email}
        </Name>
        <GameList>
          <GameListHeader>
            MyGames
          </GameListHeader>
          <ColumnLabels>
            <Column>
              Outcome
            </Column>
            <Column>
              Guess
            </Column>
            <Column>
              Guessed Correctly
            </Column>
            <Column>
              Date
            </Column>
          </ColumnLabels>
        </GameList>
      </Container>
    ) // end return
  } // end render
} // end Template

export default Profile
