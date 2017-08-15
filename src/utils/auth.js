import Auth0Lock from 'auth0-lock';
import Relay from 'react-relay';
const authDomain = 'jimvang.auth0.com';
const clientId = 'xY21jafBPZicUaHZqU1eU41VO7EkIio7';
import CreateUser from '../mutations/CreateUser';
import SigninUser from '../mutations/SigninUser';

class AuthService {
  constructor() {
    this.lock = new Auth0Lock(clientId, authDomain, {
      auth: {
        params: {
          scope: 'openid email'
        }, // end params
      }, // end auth
    }); // end this.

    this.showLock = this.showLock.bind(this);

    this.lock.on('authenticated', this.authProcess.bind(this));
  } // end constructor

  authProcess = (authResult) => {
    let {
      email,
      exp
    } = authResult.idTokenPayload
    const idToken = authResult.idToken

    this.signinUser({
      idToken,
      email,
      exp
    }).then(
      success => success,
      reject => {
        this.CreateUser({
          idToken,
          email,
          exp
        }).then()
      }
    )
  } // end authProcess

  showLock() {
    this.lock.show()
  } // end showLock

  setToken = (authFields) => {
    let {
      idToken,
      exp
    } = authFields
    localStorage.setItem('idToken', idToken)
    localStorage.setItem('exp', exp * 1000)
  }; // end setToken

  isCurrent = () => {
    let expString = localStorage.getItem('exp')
    if (!expString) {
      localStorage.removeItem('idToken')
      return false
    }
    let now = new Date();
    let exp = new Date(parseInt(expString, 10)); // 10 is a radix parameter
    if (exp < now) {
      this.logout()
      return false
    } else {
      return true
    }
  }; // end isCurrent

  getToken = () => {
    let idToken = localStorage.getItem('idToken')
    if (this.isCurrent() && idToken) {
      return idToken
    } else {
      localStorage.removeItem('idToken')
      localStorage.removeItem('exp')
      return false
    }
  }; // end getToken

  logout = () => {
    localStorage.removeItem('idToken')
    localStorage.removeItem('exp')
    location.reload()
  }; // end logout

createUser = (authFields) => {
  return new Promise( (resolve, reject) => {
    Relay.Store.commitUpdate(
      new CreateUser({
        email: authFields.email,
        idToken: authFields.idToken
      }), {
        onSuccess: (response) => {
          this.signinUser(authFields)
          resolve(response)
        },
        onFailure: (response) => {
          console.log('CreateUser error', response);
          reject (response)
        }
      }
    )
  });
}; // end createUser

signinUser = (authFields) => {
  return new Promise( (resolve, reject) => {
    Relay.Store.commitUpdate(
      new SigninUser({
        idToken: authFields.idToken
      }), {
        onSuccess: (response) => {
          this.setToken(authFields)
          resolve(response)
        },
        onFailure: (response) => {
          reject(response)
        }
      }
    )
  });
}; // end SiginUser

} // end AuthService

const auth = new AuthService()

export default auth
