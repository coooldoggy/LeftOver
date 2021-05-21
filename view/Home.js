import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native';
import { Appbar } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import CalendarView from './Calendar.js'
import NewTicket from './NewTicket.js';


function Home(props) {
    const { navigation } = props

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Appbar.Header style={styles.header}>
                    <Appbar.Action icon={require('../image/icon-hand.png')} />
                    <Appbar.Content style={styles.title} titleStyle={{ fontWeight: "bold" }} title="남은거" />
                    <Appbar.Action icon="ticket-confirmation-outline" />
                </Appbar.Header>
                <CalendarView />
                <View>
                </View>
                <FAB style={styles.fab} icon={require('../image/icon-add.png')} onPress={
                    () => navigation.navigate('NewTicket')} />
            </View>
        </PaperProvider>
    );
}


const styles = StyleSheet.create({
    header: {
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


export default Home