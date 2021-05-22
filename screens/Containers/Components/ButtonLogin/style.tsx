import React, {Component} from 'react';
import {Platform} from 'react-native';
import ScaleSheet from 'react-native-scalesheet';

export const styles = ScaleSheet.create({
    _btnSubmit: {
        height: 50,
        alignSelf: 'center',
        width: '70%',
        backgroundColor: '#203354',
        borderRadius: 27,
        margin: 25,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textSignUp:{
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: 'normal',
      }
});