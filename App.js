import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Appbar } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import CalendarView from './view/Calendar.js'
import NewTicket from './view/NewTicket.js';

const Stack = createStackNavigator(LeftOverStack);

const LeftOverStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={App}
        />
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="NewTicket" component={NewTicket} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default class App extends Component<Props> {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <NavigationContainer>
      <PaperProvider>
        <View style={styles.container}>
          <Appbar.Header style={styles.header}>
          <Appbar.Action icon={require('./image/icon-hand.png')}/>
            <Appbar.Content style={styles.title} titleStyle={{ fontWeight: "bold" }} title="남은거" />
            <Appbar.Action icon="ticket-confirmation-outline"/>
          </Appbar.Header>
          <CalendarView />
          <View>
          </View>
          <FAB style={styles.fab} icon={require('./image/icon-add.png')} onPress={
            () => navigation.navigate('NewTicket')
          }/>
        </View>
      </PaperProvider>
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  header:{
    backgroundColor: '#ffffff',
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 28
  },
  fab: {
    backgroundColor: '#ffffff',
    width: 50,  
    height: 50,   
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 16,
    bottom: 0,
  }
});