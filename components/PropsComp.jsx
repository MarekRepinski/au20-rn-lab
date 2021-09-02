/**************************************************************************************/
/*                                PropsComp.jsx                                       */
/*                                                                                    */
/*  A component that takes Props as parameter and sets a State.                       */
/*                                                                                    */
/**************************************************************************************/
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const PropsComp = (props) => {
    const [theProps, setTheProps] = useState('the Props is Empty');

    useEffect(() => {
        if (props.text != '') {
            setTheProps(props.text);
        }
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.bread}>The prop is: {props.text}</Text>
            <Text style={styles.header}>'{theProps}'</Text>
            <Button
                color='aqua'
                title='Back'
                onPress={props.nextScreen} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginBottom: 20,
        padding: 5,
        backgroundColor: '#fff',
        fontWeight: 'bold',
    },
    bread: {
        padding: 5,
        backgroundColor: '#fff',
    },
});

export default PropsComp;