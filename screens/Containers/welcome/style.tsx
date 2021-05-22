import React, {Component} from 'react';
import {Platform} from 'react-native';
import ScaleSheet from 'react-native-scalesheet';
 
export const styles = ScaleSheet.create({
    MainContainer: {
        flex: 1,
        height:'100vh',
        width:'100vw',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
      },
      
      textWelcome:{
        marginTop: 150,
        textAlign: 'center',
        fontSize: 35,
        color: 'black',
        fontWeight: 'normal',
      },
      textFitClub:{
        marginTop: 140,
        textAlign: 'center',
        fontSize: 70,
        color: 'black',
        fontWeight: 'bold',
      },
      textFHH:{
        marginTop: 5,
        textAlign: 'center',
        fontSize: 25,
        color: '#203354',
        fontWeight: 'normal',
      },
      viewAuth:{
        width: '100vw',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 80,
      },
     
});