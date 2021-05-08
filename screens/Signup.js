import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Import Components Here
import Button from '../Components/Button';
import MyText from '../Components/MyText';


//Import Icons Here
import googleIcon from '../assets/Socialicons/google.png';
import appleIcon from'../assets/Socialicons/apple.png';

export default function Signup() {
  return (
    <View style={styles.container}>
      <View style={{marginBottom:70}}/>
      <MyText mycolor="red" primary={true} content="Sign Up"/>
      <View style={{marginBottom:20}}/>
      <MyText primary={false} content="Create an Account by choosing an Option Below"/>
      <View style={{marginBottom:20}}/>
      <Button content="SIGN UP WITH GOOGLE" imagePresent={true} path={googleIcon}/>
      <View style={{marginBottom:20}}/>
      <Button content="SIGN UP WITH APPLE" imagePresent={true} path={appleIcon}/>
      <View style={{marginBottom:20}}/>
      <MyText primary={false} content="OR"/>
      <View style={{marginBottom:20}}/>
      <Button content="SIGN UP WITH EMAIL" imagePresent={false}/>
      <View style={{marginBottom:20}}/>
      <Text style={{fontSize:17,color:'#3AC6AD'}}>Already have an accont ? 
          <Text style={{textDecorationLine: 'underline',color:'#3AC6AD'}}> Log in</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F7',
    alignItems: 'center',
  },
});
