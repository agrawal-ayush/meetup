import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MeetupApi}  from "../../../constants/api";
import styles from './styles/HomeScreen'

export default class HomeScreen extends Component {
  state = { }
  render() {
    return (
      <View style={styles.root}>
        <Text>HomeScreen Hello There !!</Text>
      </View>
    );
  }
}

