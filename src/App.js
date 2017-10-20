/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   View,
   Platform,
 } from 'react-native';

 import {Scene, Router} from 'react-native-router-flux'

 import HomeView from './HomeView'
 import LoginView from './LoginView'
 import ArtistDetailView from './ArtistDetailView'


 class AppMusic extends React.Component {
   render() {

     return (
       <Router>

        <Scene key="root" hideNavBar type="replace">
           <Scene key="login" component={LoginView}  />
           <Scene key="home" component={HomeView} title="Home" hideNavBar={false} />
           <Scene key="artistDetail" component={ArtistDetailView} title="Comentarios" hideNavBar={false}/>
         </Scene>
       </Router>
       )


   }
 }

AppRegistry.registerComponent('AppMusic', () => AppMusic);
