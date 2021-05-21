import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Home from './Home.js'
import NewTicket from './NewTicket.js';

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{ title: 'Home Screen' }}
                />
                <Stack.Screen
                    name='NewTicket'
                    component={NewTicket}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator
