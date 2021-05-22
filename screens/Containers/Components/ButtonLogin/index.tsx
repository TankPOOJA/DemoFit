import React, {Component} from 'react';
import {Platform, View,TouchableOpacity,Text} from 'react-native';
import {styles} from './style'
import {useNavigation} from '@react-navigation/native';


export default function ButtonLogin ({name}){
 // const {navigate} = useNavigation();
    return(
     <TouchableOpacity style={styles._btnSubmit}>
     <Text
       style={styles.textSignUp}>
       {name}
     </Text>
   </TouchableOpacity>
    );
}