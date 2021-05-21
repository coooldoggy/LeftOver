import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AvailableTicket from './AvailableTicket.js'
import UsedTicket from './UsedTicket.js'

const Tab = createMaterialTopTabNavigator();

function NewTicket(props) {
    const { navigation } = props

    return (
        <View>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                <Appbar.Content style={styles.title} titleStyle={{ fontWeight: "bold" }} title="이용권" />
            </Appbar.Header>
            {/* <Tab.Navigator>
                <Tab.Screen name="사용중" component={AvailableTicket} />
                <Tab.Screen name="사용완료" component={UsedTicket} />
            </Tab.Navigator> */}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 28
    },
    confirm: {
        fontSize: 16,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
});

export default NewTicket;