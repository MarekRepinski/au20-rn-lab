/**************************************************************************************/
/*                                   Menu.jsx                                         */
/*                                                                                    */
/*  Simple component. Shows text in ScrollView and some Images.                       */
/*                                                                                    */
/**************************************************************************************/
import React from 'react';
import { StyleSheet, Image, ScrollView, Text, Button } from 'react-native';

const FirstComp = ({nextScreen}) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>About the Lab</Text>
            <Image style={ {resizeMode: 'contain', width: '100%', height: '100%'} } source={require('../images/ireland1.jpg')} />
            <Text style={styles.bread}>I'm sorry this lab lacks some imagination.
                I've had a really busy time in my life and this code i actually written in Dublin, Gdansk and Stockholm.
                Some of it was even written on airports. This app has no real function.
                It's just a way for me to show that I've understood the class.
                The menu is driven with callbacks and the other components show the use of props and useContext.
                And one is a call for an API.
            </Text>
            <Button
                color='aqua'
                title='Back' 
                onPress={nextScreen} />
            <Image style={ {resizeMode: 'contain', width: '100%', height: '100%'} } source={require('../images/gdansk.jpg')} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    button: {
        marginTop: 40,
    },
    header: {
        marginTop: 80,
        padding: 5,
        backgroundColor: '#fff',
        fontWeight: 'bold',
    },
    bread: {
        marginBottom: 20,
        padding: 5,
        backgroundColor: '#fff',
    },
});

export default FirstComp;