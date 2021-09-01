import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './components/Menu'
import { MyContextProvider } from './context/MyContext';

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
