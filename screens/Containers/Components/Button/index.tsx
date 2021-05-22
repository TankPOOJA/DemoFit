import React, {Component} from 'react';
import {Platform, View,TouchableOpacity,Text} from 'react-native';
import {styles} from './style'
import {useNavigation} from '@react-navigation/native';


export default function Button ({name,onPress}){
 // const {navigate} = useNavigation();
    return(
        
        <TouchableOpacity style={styles._btnSubmit}
        onPress={onPress}>
        <Text
          style={styles.textSignUp}>
          {name}
        </Text>
      </TouchableOpacity>
    
    );
}