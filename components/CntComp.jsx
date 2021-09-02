/**************************************************************************************/
/*                                 CntComp.jsx                                        */
/*                                                                                    */
/*  Component that count how many time it is vivsited and stors it in Contex from     */
/*  MyContext.js                                                                      */
/*                                                                                    */
/**************************************************************************************/
import MyContext from '../context/MyContext';
import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

const CntComp = ({ nextScreen }) => {
    const context = useContext(MyContext);
    
    useEffect(() => {
        context.setCnt(context.cnt + 1);
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>This page has been visited: {context.cnt} times</Text>
            <Button
                color='aqua'
                title='Back'
                onPress={nextScreen} />

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
});

export default CntComp;