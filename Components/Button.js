import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';


export default function Button(props) {
  return (
    <TouchableOpacity style={styles.container}>
        {
            props.imagePresent?<Image source={props.path} style={{height:20,width:20,marginRight:20}}/>:<Text/>
        }
        <Text style={{color:'#3AC6AD',fontWeight:'700'}}>{props.content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:15,
    width:350,
    borderWidth:0.2,
    borderColor:'grey',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
  },
});
