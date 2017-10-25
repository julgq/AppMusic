/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

import FBSDK, {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk'



import { Actions } from 'react-native-router-flux';
import firebase, { firebaseAuth } from './firebase';

const { FacebookAuthProvider } = firebase.auth


export default class LoginView extends Component {

  state = {
    credentials: null
  }



  // Antes de que el componente este moentado
  componentWillMount() {
    this.authenticateUser()
  }




  authenticateUser = () => {
    AccessToken.getCurrentAccessToken().then((data) => {
      const { accessToken } = data
      const credential = FacebookAuthProvider.credential(accessToken)
      firebaseAuth.signInWithCredential(credential).then((credentials) => {
        console.warn("Sign In Sucess", credentials);
        this.setState({ credentials })
        Actions.home()
      }, function(error){
        console.warn("Sign In Error", error);
      });
    })
  }

handleLoginFinished = (error, result) => {
  if (error) {
    alert("login has error: " + result.error);
  } else if (result.isCancelled) {
    alert("login is cancelled.");
  } else {

      this.authenticateUser()
  }
}


  render() {
    return (
      /*<View style={styles.container}>
        <Text style={styles.welcome}>Bienvenidos a PlatziMusic</Text>
        <LoginButton
          readPermissions={['publish_profile','email']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.error(error)
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>

      </View>*/

      <Image source={require('./background.jpg')} style={styles.container}>
        <Image source={require('./logo.png')} style={styles.logo} />
        <Text style={styles.welcome}>Bienvenidos a AppMusic</Text>
        <Text style={styles.welcome}>{this.state.credentials && this.state.credentials.displayName}</Text>
        
        <LoginButton
          publishPermissions={["publish_actions"]}
          readPermissions={['public_profile','email']}
          onLoginFinished={this.handleLoginFinished}
          onLogoutFinished={() => alert("logout.")}/>
      </Image>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    backgroundColor: 'transparent',
    color: 'white'
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 15,
  }
});
