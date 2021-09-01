import MyContext from '../context/MyContext';
import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';

const CntComp = ({ nextScreen }) => {
    const context = useContext(MyContext);
    
    useEffect(() => {
        context.setCnt(context.cnt + 1);
    }, []);
    
    return (
        <View>
            <Text>This page has been visited: {context.cnt} times</Text>
            <button onClick={nextScreen}>Return</button>
        </View>
    );
}

export default CntComp;