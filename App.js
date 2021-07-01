import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import { TabNavigator } from './components/TabNavigator'; 
import { createAppContainer, createSwitchNavigator } from 'react-navigation'; 

export default function App() {
  return (
    <AppContainer/>
  );
}
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  TabNavigator:{screen:TabNavigator}
}) 
const AppContainer = createAppContainer(SwitchNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
