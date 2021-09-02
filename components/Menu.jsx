import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import React from 'react';
import Welcome from './Welcome'
import FirstComp from './FirstComp';
import PropsComp from './PropsComp';
import CntComp from './CntComp';
import DrinkNeed from './DrinkNeed';

const Menu = () => {
    const WELCOME = 'welcome', FIRST = 'first', MENU = 'menu', PROPS = 'props', CNT = 'cnt', DRINK = 'drink';
    const [currentscreen, setCurrentScreen] = useState(WELCOME);
    const [propsString, setPropsString] = useState('');

    useEffect(() => {
        if (currentscreen === MENU){
            setPropsString('');
        }
    }, [currentscreen]);

    let content = null;
    switch (currentscreen) {
        case WELCOME:
            content = <Welcome nextScreen={() => setCurrentScreen(MENU)} />;
            break;
        case FIRST:
            content = <FirstComp nextScreen={() => setCurrentScreen(MENU)} />;
            break;
        case PROPS:
            content = <PropsComp text={propsString} nextScreen={() => setCurrentScreen(MENU)} />;
            break;
        case CNT:
            content = <CntComp nextScreen={() => setCurrentScreen(MENU)} />;
            break;
        case DRINK:
            content = <DrinkNeed nextScreen={() => setCurrentScreen(MENU)} />;
            break;
        default:
            content = menuItems();
    }

    return (
        <View style={styles.menu}>{content}</View>
    );

    function menuItems() {
        return (
            <React.Fragment>
                <Text style={styles.header}>Menu</Text>
                <Pressable key={0} style={styles.button} onTouchEnd={() => setCurrentScreen(FIRST)}>
                    <Text>Info about the Lab</Text>
                </Pressable>
                <Pressable key={2} style={styles.button} onTouchEnd={() => setCurrentScreen(PROPS)}>
                    <Text>Click for Props</Text>
                </Pressable>
                <TextInput key={1} style={styles.input} onChangeText={(text) => setPropsString(text)} placeholder="add a props" />
                <Pressable key={3} style={styles.button} onTouchEnd={() => setCurrentScreen(CNT)}>
                    <Text>Counter via Context</Text>
                </Pressable>
                <Pressable key={4} style={styles.button} onTouchEnd={() => setCurrentScreen(DRINK)}>
                    <Text>I need a drink</Text>
                </Pressable>
            </React.Fragment>
        );
    }

}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        width: '90%',
        marginTop: 40,
        padding: 5,
        backgroundColor: 'aqua',
        fontWeight: 'bold',
    },
    header: {
        marginTop: 80,
        padding: 5,
        backgroundColor: '#fff',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Menu;