/**************************************************************************************/
/*                            AU20 React Native Lab                                   */
/*                                                                                    */
/*  A small app with 6 components to show what I've learned in class.                 */
/*                                                                                    */
/**************************************************************************************/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './components/Menu'                      // Main component
import { MyContextProvider } from './context/MyContext';  // Context and provider JS-file 

export default function App() {
  return (
    <View style={styles.container}>
      <Text>AU20 React Native Lab</Text>
      <StatusBar style="auto" />
      <MyContextProvider>
        <Menu />
      </MyContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
