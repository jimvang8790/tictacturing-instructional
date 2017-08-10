import React, {Component} from 'react';
import {Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels} from '../styled/Profile';

class Profile extends Component {

  // dummy data
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

  // connect all dummy data to list
  get records() {
    return this.props.user.games.map( (game, index) => {
      return (
        <GameRecord
          key={index}
          index={index}
        >
          <Column>
            {(game.winner) ? 'Won!' : "Didn't win"}
          </Column>
          <Column>
            "ROBOT"
          </Column>
          <Column>
            "No"
          </Column>
          <Column>
            {game.createdAt}
          </Column>
        </GameRecord>
      )
    }) // end return
  } // end get records

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
          {this.records}
        </GameList>
      </Container>
    ) // end return
  } // end render
} // end Template

export default Profile
