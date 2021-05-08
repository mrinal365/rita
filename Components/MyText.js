import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Import Components Here
import Button from './Button';

export default function MyText(props) {
  return (
    <Text style={props.primary?styles.primary:styles.secondary}>{props.content}</Text>
  );
}

const styles = StyleSheet.create({
  primary: {
    fontSize:25,
    fontWeight:'700',
    color:'black'
  },
  secondary:{
    fontSize:15,
    color:'grey',
  }
});
