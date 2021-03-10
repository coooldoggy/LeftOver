import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Appbar } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const _plus = () => console.log('plus click!!');

    return (
      <PaperProvider>
        <View style={styles.container}>
          <Appbar.Header style={styles.header}>
            <Appbar.Content style={styles.title} titleStyle={{ fontWeight: "bold" }} title="남은거" />
            <Appbar.Action icon="plus" onPress={_plus} />
            <Appbar.Action icon="ticket-confirmation-outline" onPress={_plus} />
          </Appbar.Header>
        </View>
      </PaperProvider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 28
  }
});