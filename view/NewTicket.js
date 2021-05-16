import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const NewTicket = () => {
    return (
        <View>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content style={styles.title} titleStyle={{ fontWeight: "bold" }} title="이용권 등록" />
                <Appbar.Content style={styles.title} title="등록" />
            </Appbar.Header>
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
        alignItems: 'flex-start',
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