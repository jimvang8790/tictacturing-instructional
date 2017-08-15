import Relay from 'react-relay';

export default class SigninUser extends Relay.Mutation {

  getVariables() {
    return {
      auth0: {
        idToken: this.props.idToken
      }
    }; // end return
  } // end getVariables

  getMutation () {
    return Relay.QL`mutation{signinUser}`;
  } // end getMutation

  getFatQuery () {
    return Relay.QL`
      fragment on SigninPayLoad {
        viewer
      }
    `;
  } // end getFatQuery

  getConfigs() {
    return [
      {
        type: 'REQUIRED_CHILDRED',
        children: [
          Relay.QL`
            fragment on SigninPayLoad {
              viewer {
                user {
                  id
                }
              }
            }
          `
        ]
      }
    ]; // end return
  } // end getConfigs

}// end export
