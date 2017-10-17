/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import FBSDK, {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk'



import { Actions } from 'react-native-router-flux';

import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDZyNuWfoLQ5ebU0xFpo8gkieOQ00Lp2lI",
    authDomain: "appmusic-869c3.firebaseapp.com",
    databaseURL: "https://appmusic-869c3.firebaseio.com",
    projectId: "appmusic-869c3",
    storageBucket: "",
    messagingSenderId: "1006783840974"
  };
  firebase.initializeApp(config);


const { FacebookAuthProvider } = firebase.auth
const firebaseAuth = firebase.auth()

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

      <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenidos a AppMusic</Text>
      <Text style={styles.welcome}>{this.state.credentials && this.state.credentials.displayName}</Text>
        <LoginButton
          publishPermissions={["publish_actions"]}
          readPermissions={['public_profile','email']}
          onLoginFinished={this.handleLoginFinished}
          onLogoutFinished={() => alert("logout.")}/>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  }
});
