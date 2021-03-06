import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Import Screens Here
import Signup from './screens/Signup';

export default function App() {
  return (
    <View style={styles.container}>
      <Signup/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
