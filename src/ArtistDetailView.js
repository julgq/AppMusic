/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import ArtistBox from './ArtistBox'

export default class ArtistDetailView extends Component {
  render() {
    const artist = this.props.artist

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 70,
  },
  input: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  }
});
