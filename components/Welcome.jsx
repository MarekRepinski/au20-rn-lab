import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Welcome = ({ nextScreen }) => (
  <View style={styles.welcome}>
    <Text>AU20 Stockholm</Text>
    <Text>React Native Lab</Text>
    <button onClick={nextScreen}>Enter</button>
  </View>
);

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Welcome;