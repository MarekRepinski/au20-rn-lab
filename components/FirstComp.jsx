import React from 'react';
import { ScrollView, Text } from 'react-native';

const FirstComp = ({nextScreen}) => {
    return (
        <ScrollView>
            <Text>I'm sorry this lab lacks some imagination.
                I've had a really busy time in my life and this code i actually written in Dublin, Gdansk and Stockholm.
                Some of it was even written on airports. This app has no real function.
                It's just a way for me to show that I've understood the class.
                The menu is driven with callbacks and the other components show the use of props and useContext.
                And one is a call for an API.
            </Text>
            <button onClick={nextScreen}>Back</button>
        </ScrollView>
    );
}

export default FirstComp;