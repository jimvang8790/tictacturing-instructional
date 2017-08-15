import Relay from 'react-relay';

export default class CreateUser extends Relay.Mutation {

  getVariables() {
    return {
      email: this.props.email,
      authProvider: {
        auth0: {
          idToken: this.props.idToken
        }
      }
    }; // end return
  } // end getVariables

  getMutation () {
    return Relay.QL`mutation{createUser}`;
  } // end getMutation

  getFatQuery () {
    return Relay.QL`
      fragment on CreateUserPayLoad {
        user
        viewer
      }
    `;
  } // end getFatQuery

  getConfigs() {
    return [
      {
        type: 'RANGE_ADD',
        parentName: 'viewer',
        connectionName: 'allUsers',
        edgeName: 'user',
        rangeBehaviors: {
          '': 'append',
        },
      },
      {
        type: 'REQUIRED_CHILDRED',
        children: [
          Relay.QL`
            fragment on CreateUserPayLoad {
              user
            }
          `
        ]
      }
    ]; // end return
  } // end getConfigs

}// end export
