import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#6200EE',
    borderRadius: 5,
  },
  content: {
    fontSize: 24,
    color: 'white',
  },
  user: {
    fontSize: 15,
    color: 'black',
    alignItems: 'center'
  }
});