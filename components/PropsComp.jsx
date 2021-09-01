import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PropsComp = (props) => {
    return (
        <View>
            <Text>The prop is: {props.text}</Text>
            <button onClick={props.nextScreen}>Return</button>
        </View>
    );
}

export default PropsComp;