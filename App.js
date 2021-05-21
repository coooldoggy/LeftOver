import React from 'react'
import { StatusBar } from 'react-native'
import MainStackNavigator from './view/MainStackNavigator'
import SplashScreen from 'react-native-splash-screen'

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    return <MainStackNavigator />
  }

}

export default App